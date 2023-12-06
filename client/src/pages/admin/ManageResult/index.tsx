import {
  Container,
  Box,
  Paper,
  Button,
  Grid,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import AdminHeader from "../utils/header";
import SectionHeader from "../component/SectionHeader";
import {
  GridColDef,
  DataGrid,
  GridToolbar,
  GridRowId,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { BiPlus, BiPrinter } from "react-icons/bi";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { useAppDispatch, useAppSelector } from "../../../actions/hooks";
import { RootState } from "../../../app/store";
import {
  addResult,
  deleteResult,
  fetchResult,
  fetchResultById,
  fetchResultByPatient,
  fetchTotalResultByPatient,
  selectTestResultById,
  updateResult,
} from "../../../reducers/testResult/testResultSlice";
import {
  fetchTestCategory,
  selectAllTestCategory,
} from "../../../reducers/testCategory/testCategory";
import {
  fetchPatient,
  selectPatientById,
} from "../../../reducers/patient/patientSlice";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import PreviewIcon from "@mui/icons-material/Preview";
import { ec_care_testResult } from "../../../entity/ec_care_testResult";
import ModalComponent from "../component/Modal";
import LabResultModal from "../component/Result";
import AddNewTest from "../component/AddTest";
import { ec_care_test_category } from "../../../entity/ec_care_test_category";
import TestPreview from "../component/TestPreview";
import {
  fetchResultByTestField,
  insertResult,
  modifyResult,
  removeResult,
} from "../../../reducers/results/resultsSlice";
import EditTestModal from "../component/EditResultModal";
import { getTestByTest } from "../../../reducers/tests/testSlice";

const debounce = <F extends (...args: any[]) => any>(
  func: F,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<F>): void => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const ManageResult = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const appDispatch = useAppDispatch();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const patient = useAppSelector((state: RootState) =>
    selectPatientById(state, id)
  );
  const testCategory = useAppSelector((state: RootState) =>
    selectAllTestCategory(state)
  );

  const medTechData = [
    {
      id: 1,
      name: "ROCHELLE REUBEN C. VALLECERA, RMT, MLS (ASCPi)",
      licence: "0108908",
    },
    {
      id: 2,
      name: "EMMANUEL B. GARCES, RMT",
      licence: "0099087",
    },
    {
      id: 3,
      name: "MARITES DE LOS CIENTOS, RMT",
      licence: "0028407",
    },
  ];

  function formatDateForMySQL(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  // Fetching functions
  const retrieveTestResult = async () => {
    try {
      await appDispatch(fetchPatient());
      await appDispatch(fetchTestCategory());
      await appDispatch(fetchResult());
      if (!id) {
        navigate("/admin/dashboard");
      }
      const result = await appDispatch(fetchResultByPatient(id));
      if (result.type === "testResult/fetchTestResultsByPatient/fulfilled") {
        const total: any = await appDispatch(fetchTotalResultByPatient(id));
        dispatch({
          type: "setTotal",
          payload: total.payload.total,
        });
        dispatch({
          type: "setTestResult",
          payload: result.payload,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  // End of Fetching Functions

  // Start Handle on Change
  const onOpenEditModal = () => {
    dispatch({
      type: "setOpenModal",
      payload: !state.openModal,
    });
  };

  const onOpenTestModal = () => {
    dispatch({
      type: "setAddTestModal",
      payload: !state.addTestModal,
    });
  };

  const openPreviewModal = () => {
    dispatch({
      type: "setPreviewModal",
      payload: !state.previewModal,
    });
  };

  const onAddTestOnChange = (selection: any) => {
    selection &&
      selection?.map((item) => {
        const findData = state.addedTests?.find((d) => d.id === item);
        if (findData) {
          return;
        }
        const filteredData = testCategory.find((d) => d.id === item);
        dispatch({
          type: "setAddedTests",
          payload: filteredData,
        });
      });
  };

  const handleChange = debounce((id: number, event: any) => {
    const { value, name } = event.target;
    const findField = state.patientResult.find(
      (d) => d.patient_results_id === id
    );
    findField.result = value;
    const find = state.container.find((d) => d.id === id);
    if (find) {
      return;
    }
    const result = {
      result: value,
      id: id,
    };

    state.container.push(result);
  }, 500);

  const handleFieldChange = (id: number, event: any) => {
    handleChange(id, event);
  };
  // End Handle on Change

  // Start of Submit Functions
  const onTestSubmit = () => {
    window.open(
      `/admin/dashboard/print?id=${id}&medTech=${state.medTechId}`,
      "_blank"
    );
  };

  const onAddTest = () => {
    const updatedTestCategory = testCategory.filter((item) => {
      const existsInCategory = state.testResult.some(
        (d) => d.test_id.id === item.id
      );
      return !existsInCategory;
    });
    dispatch({
      type: "setFilteredTests",
      payload: updatedTestCategory,
    });

    onOpenTestModal();
  };

  const onClickEdit = async (
    rowId: GridRowId,
    name: string,
    test_id: number
  ) => {
    dispatch({
      type: "setTestType",
      payload: name,
    });

    try {
      const params = {
        test_id: test_id,
        patient_id: id,
      };
      const response = await appDispatch(fetchResultByTestField(params));
      if (response.type === "results/fetchResultsByTestField/fulfilled") {
        dispatch({
          type: "setPatientResult",
          payload: response.payload,
        });
      }
    } catch (err) {
      console.log(err);
    }
    onOpenEditModal();
  };

  const onClickDelete = async (rowId: GridRowId, test_id: number | string) => {
    const result = window.confirm("Are you sure you want to proceed?");
    if (result) {
      try {
        const params = {
          test_id: test_id,
          patient_id: id,
        };
        const deleteRes = await appDispatch(deleteResult(rowId));
        const response = await appDispatch(removeResult(params));
        if (
          deleteRes.type === "testResult/deleteTestResult/fulfilled" &&
          response.type === "results/removeResult/fulfilled"
        ) {
          retrieveTestResult();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onClickPreview = async (
    rowId: GridRowId,
    name: string,
    test_id: number | string
  ) => {
    dispatch({
      type: "setTestType",
      payload: name,
    });
    try {
      const params = {
        test_id: test_id,
        patient_id: id,
      };
      const response = await appDispatch(fetchResultByTestField(params));
      console.log(response);
      if (response.type === "results/fetchResultsByTestField/fulfilled") {
        dispatch({
          type: "setPatientResult",
          payload: response.payload,
        });
        openPreviewModal();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditSubmit = () => {
    try {
      state.container.map(async (d) => {
        const response = await appDispatch(modifyResult(d));
        if (response.type === "results/modifyResult/fulfilled") {
          dispatch({
            type: "setContainerEmpty",
            payload: [],
          });
          onOpenEditModal();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const submit = () => {};

  const handleAddSubmit = async () => {
    try {
      let resultData: ec_care_testResult[] = [];
      let test_id = [];

      state.addedTests?.map((item) => {
        const data: any = {
          id: null,
          test_id: item.id,
          patient_id: id,
          testDate: formatDateForMySQL(new Date()),
          status: 0,
          created_at: formatDateForMySQL(new Date()),
          updated_at: null,
        };
        test_id.push(item?.id);
        resultData.push(data);
      });

      if (test_id.length > 0) {
        test_id.map(async (d) => {
          const testResponse: any = await appDispatch(getTestByTest(d));

          if (testResponse.type === "tests/getTestByTest/fulfilled") {
            testResponse.payload.map(async (item: any) => {
              const resData: any = {
                result: null,
                lms_patient_id: id,
                lms_test_id: item.id,
                testDate: new Date().toDateString().split("T")[0],
              };
              await appDispatch(insertResult(resData));
            });
          }
        });
      }

      if (resultData.length > 0) {
        resultData.forEach(async (item, index) => {
          await appDispatch(addResult(item));
        });
        retrieveTestResult();
        onOpenTestModal();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditModalSubmit = async () => {
    try {
      const response = await appDispatch(updateResult(state.result));
      if (response.type === "testResult/updateTestResult/fulfilled") {
        onOpenEditModal();
      }
    } catch (err) {
      console.log(err);
    }
  };
  // End of Submit Functions

  // Start of Columns
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "test_id.name",
      headerName: "Laboratory Test Name",
      width: 400,
      align: "left",
      headerAlign: "left",
      editable: true,
      valueGetter: (params) => params.row.test_id.name,
    },
    {
      field: "test_id.price",
      headerName: "Price",
      type: "number",
      width: 100,
      align: "center",
      headerAlign: "center",
      valueGetter: (params) => params.row.test_id.price,
    },
    {
      field: "test_id.type",
      headerName: "Test Type",
      type: "string",
      width: 200,
      align: "center",
      headerAlign: "center",
      valueGetter: (params) => params.row.test_id.type,
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 200,
      align: "center",
      headerAlign: "center",
      valueGetter: (params) => {
        return params.row.status ? "Pending" : "Approved";
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        return [
          <GridActionsCellItem
            icon={<PreviewIcon />}
            label="Preview"
            className="textPrimary"
            onClick={() => onClickPreview(id, row.test_id.name, row.test_id.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => onClickEdit(id, row.test_id.name, row.test_id.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => onClickDelete(id, row.test_id.id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  // End of Columns

  React.useEffect(() => {
    retrieveTestResult();
  }, []);

  React.useEffect(() => {
    if (patient) {
      dispatch({
        type: "setPatient",
        payload: patient,
      });
    }
  }, [patient]);

  React.useEffect(() => {
    if (state.testResult) {
      let data: ec_care_testResult[] = state.testResult;
      data.map((item) => {
        let id: any = item.test_id;
        const testCat = testCategory.find((test) => test.id === id);
        item.test_id = testCat;
      });
    }
  }, [state.testResult]);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%" }}>
          <AdminHeader />
        </Box>
        <Box>
          <ModalComponent
            open={state.openModal}
            handleClose={onOpenEditModal}
            title={`${state.testType} RESULT FIELDS`}
            handleSubmit={handleEditSubmit}
            showButton={true}
          >
            <EditTestModal
              patientResult={state.patientResult}
              handleFieldChange={handleFieldChange}
            />
          </ModalComponent>
          <ModalComponent
            open={state.addTestModal}
            handleClose={onOpenTestModal}
            title={`ADD NEW LABORATORY TEST`}
            handleSubmit={submit}
            showButton={false}
          >
            <AddNewTest
              onChecked={onAddTestOnChange}
              onSubmit={handleAddSubmit}
              onCancel={onOpenTestModal}
              testCategory={state.filteredTests}
              testResult={state.testResult}
              patient_id={id}
            />
          </ModalComponent>
          <ModalComponent
            open={state.previewModal}
            handleClose={openPreviewModal}
            title={`${state.testType} RESULT`}
            handleSubmit={submit}
            showButton={false}
          >
            <TestPreview patientResult={state.patientResult} />
          </ModalComponent>
        </Box>
        <Paper sx={{ p: { xs: 2, md: 3 } }}>
          <SectionHeader title="MANAGE TEST RESULTS" />
          <Box display={"flex"} flexWrap={"wrap"} flexDirection={"column"}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Box
                  border={1}
                  sx={{ width: "100%", borderColor: "#0d7f3f" }}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  height={50}
                >
                  <Typography component="h4" variant="h4" paddingX={1}>
                    Patient Name:
                  </Typography>
                  <Typography
                    component="h4"
                    variant="h4"
                    paddingX={1}
                    sx={{ fontWeight: 400, whiteSpace: 5 }}
                  >
                    {state.patient.fullName}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  border={1}
                  sx={{ width: "100%", borderColor: "#0d7f3f" }}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  height={50}
                >
                  <Typography component="h4" variant="h4" paddingX={1}>
                    Total Fee:
                  </Typography>
                  <Typography
                    component="h4"
                    variant="h4"
                    paddingX={1}
                    sx={{ fontWeight: 400 }}
                  >
                    ₱ {state.total?.toLocaleString()}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box
                  border={1}
                  sx={{ width: "100%", borderColor: "#0d7f3f" }}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  height={50}
                  justifyContent={"center"}
                >
                  <IconButton aria-label="right" onClick={onAddTest}>
                    <Typography component="h4" variant="h4" paddingX={1}>
                      Add Test
                    </Typography>
                    <BiPlus size={30} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={1}>
                <Box
                  border={1}
                  sx={{ width: "100%", borderColor: "#0d7f3f" }}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  height={50}
                >
                  <IconButton aria-label="right" onClick={onTestSubmit}>
                    <BiPrinter size={30} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box
                  border={1}
                  sx={{ width: "100%", borderColor: "#0d7f3f" }}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  height={50}
                  justifyContent={"left"}
                >
                  <Typography component="h4" variant="h4" paddingX={1}>
                    Medical Technologists:
                  </Typography>
                  <Typography
                    component="h4"
                    variant="h4"
                    paddingX={1}
                    sx={{ fontWeight: 400 }}
                  >
                    <Select
                      value={state.medTechId}
                      onChange={(e) => {
                        dispatch({
                          type: "setMedTechId",
                          payload: e.target.value,
                        });
                      }}
                    >
                      {medTechData.map((d, index) => (
                        <MenuItem key={index} value={d.id}>
                          {d.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%", t: 2 }}>
            <DataGrid
              style={{
                width: "100%",
                overflowX: "auto",
              }}
              density="comfortable"
              autoHeight={true}
              rows={state.testResult}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 20, 30]}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
            />
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ManageResult;
