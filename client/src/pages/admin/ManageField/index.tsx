import { Container, Box, Paper, Button } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import AdminHeader from "../utils/header";
import SectionHeader from "../component/SectionHeader";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { BiPlusCircle } from "react-icons/bi";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { useAppDispatch } from "../../../actions/hooks";
import {
  addTestField,
  editTestField,
  fetchTestField,
  fetchTestFieldByid,
  removeTestField,
} from "../../../reducers/testField/testFieldSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import PreviewIcon from "@mui/icons-material/Preview";
import ModalComponent from "../component/Modal";
import TestFieldComponent from "../component/AddField";
import { ec_care_test_field } from "../../../entity/ec_care_test_field";
import Preview from "../component/Preview";
import PreviewField from "../component/PreviewField";

const ManageField = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const appDispatch = useAppDispatch();

  const onChangeAddForm = (event: any) => {
    const { name, value } = event.target;
    dispatch({
      type: "setField",
      name: name,
      value: value,
    });
  };

  const onClickAddTest = () => {
    onOpenAddModal();
  };

  const onOpenPreviewModal = () => {
    dispatch({
      type: "setOpenViewModal",
      payload: !state.openViewModal,
    });
  };

  const onOpenEditModal = () => {
    dispatch({
      type: "setOpenEditModal",
      payload: !state.openEditModa,
    });
  };

  const onOpenAddModal = () => {
    dispatch({
      type: "setFieldById",
      payload: [],
    });
    dispatch({
      type: "setOpenAddModal",
      payload: !state.openAddModal,
    });
  };

  const handleEditSubmit = async () => {
    try {
      const testFields: ec_care_test_field = state.field;
      const response = await appDispatch(editTestField(testFields));
      if (response.type === "testField/editTestField/fulfilled") {
        retrieveTestField();
        onOpenEditModal();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddSubmit = async () => {
    try {
      const testField: ec_care_test_field = state.field;
      await appDispatch(addTestField(testField));
      retrieveTestField();
      onOpenAddModal();
    } catch (err) {
      console.log(err);
    }
  };

  const onClickEdit = async (id: any) => {
    try {
      const response = await appDispatch(fetchTestFieldByid(id));
      if (response.type === "testField/fetchFieldById/fulfilled") {
        dispatch({
          type: "setFieldById",
          payload: response.payload,
        });
        onOpenEditModal();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickPreview = async (id: any) => {
    try {
      const response = await appDispatch(fetchTestFieldByid(id));
      if (response.type === "testField/fetchFieldById/fulfilled") {
        dispatch({
          type: "setFieldById",
          payload: response.payload,
        });
        onOpenPreviewModal();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickDelete = async (id: any) => {
    const confirm = window.confirm("Are you sure you want to delete this?");

    if (confirm) {
      try {
        await appDispatch(removeTestField(id));
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const retrieveTestField = async () => {
    try {
      const response = await appDispatch(fetchTestField());
      if (response.type === "testField/fetchField/fulfilled") {
        dispatch({
          type: "setTestField",
          payload: response.payload,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    retrieveTestField();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "test_name",
      headerName: "Test Name",
      width: 200,
      align: "left",
      headerAlign: "left",
      renderCell(params) {
        return <strong>{params.row.test_name.toUpperCase()}</strong>;
      },
    },
    { field: "unit", headerName: "Unit", width: 100 },
    { field: "maleRefRange", headerName: "Male Ref. Range", width: 100 },
    { field: "femaleRefRange", headerName: "Female Ref. Range", width: 100 },
    {
      field: "desirableRefRange",
      headerName: "Desirable Ref. Range",
      width: 100,
    },
    {
      field: "borderlineRefRange",
      headerName: "Borderline Ref. Range",
      width: 100,
    },
    {
      field: "highRiskRefRange",
      headerName: "High Risk Ref. Range",
      width: 100,
    },
    { field: "other", headerName: "Other", width: 100 },
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
            onClick={() => onClickPreview(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => onClickEdit(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => onClickDelete(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Test Field Management</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%" }}>
          <AdminHeader />
        </Box>
        <ModalComponent
          open={state.openEditModa}
          handleClose={onOpenEditModal}
          title={`EDIT TEST FIELD`}
          handleSubmit={handleEditSubmit}
          showButton={true}
          maxWidth="lg"
        >
          {/* EDIT TEST FIELD */}
          <TestFieldComponent onChange={onChangeAddForm} fields={state.field} />
        </ModalComponent>
        <ModalComponent
          open={state.openAddModal}
          handleClose={onOpenAddModal}
          title={`ADD TEST FIELD`}
          handleSubmit={handleAddSubmit}
          showButton={true}
          maxWidth="md"
        >
          {/* ADD TEST FIELD */}
          <TestFieldComponent onChange={onChangeAddForm} />
        </ModalComponent>
        <ModalComponent
          open={state.openViewModal}
          handleClose={onOpenPreviewModal}
          title={`VIEW TEST FIELD`}
          handleSubmit={handleAddSubmit}
          showButton={false}
          maxWidth="sm"
        >
          {/* VIEW TEST FIELD */}
          <PreviewField fields={state.field} />
        </ModalComponent>
        <Paper sx={{ p: { xs: 2, md: 3, width: "100%" } }}>
          <SectionHeader title="LABORATORY TEST FIELD MANAGEMENT" />
          <Box display={"flex"} justifyContent={"left"} my={2}>
            <Button
              variant="outlined"
              endIcon={<BiPlusCircle />}
              onClick={onClickAddTest}
            >
              Add New Test Field
            </Button>
          </Box>
          <DataGrid
            rows={state.testField}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20, 30]}
            disableColumnFilter
            disableDensitySelector
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Paper>
      </Container>
    </>
  );
};

export default ManageField;
