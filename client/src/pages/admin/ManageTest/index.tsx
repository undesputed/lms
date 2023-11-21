import { Container, Box, Paper, Typography, Grid, IconButton, Button } from "@mui/material";
import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../component/SectionHeader";
import AdminHeader from "../utils/header";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridToolbar,
} from "@mui/x-data-grid";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { useAppDispatch } from "../../../actions/hooks";
import { fetchTestCategory } from "../../../reducers/testCategory/testCategory";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import PreviewIcon from "@mui/icons-material/Preview";
import ModalComponent from "../component/Modal";
import Preview from "../component/Preview";
import { fetchByFieldId } from "../../../reducers/testCategoryField/testCategoryFIeldSlice";
import EditTestModal from "../component/EditTest";
import { fetchTestField } from "../../../reducers/testField/testFieldSlice";
import { BiPlusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ManageTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  // Start of Fetching Functions
  const retrieveTestCategory = async () => {
    try {
      const response = await appDispatch(fetchTestCategory());
      if (response.type === "testCategory/fetchTestCategory/fulfilled") {
        dispatch({
          type: "setTestCategory",
          payload: response.payload,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  // End of Fetching Functions

  // Start of Button Events
  const onClickPreview = async (id: GridRowId, name: string) => {
    try {
      const response = await appDispatch(fetchByFieldId(id));
      if (
        response.type === "testFieldCategory/fetchCategoryByFieldId/fulfilled"
      ) {
        dispatch({
          type: "setTestCategoryField",
          payload: response.payload,
        });
        dispatch({
          type: "setTestCategoryId",
          payload: id,
        });
        onOpenPreviewModal();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickEdit = async (id: GridRowId, name: string) => {
    try {
      const response = await appDispatch(fetchTestField());
      if (response.type === "testField/fetchField/fulfilled") {
        dispatch({
          type: "setTestField",
          payload: response.payload,
        });
        dispatch({
          type: "setTestCategoryId",
          payload: id,
        });
        onOpenEditModal();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickDelete = (id: GridRowId) => {
    console.log(state);
  };

  const handleEditSubmit = () => {
    console.log("Handle Submit");
  };

  const handlePreviewSubmit = () => {
    console.log("Preview Submit");
  };

  const handlePreviewClose = () => {
    onOpenPreviewModal();
  };

  const onClickAddTest = () => {
    navigate("/admin/dashboard/addTest");
  }
  // End of Button Events

  // Start of On Change Events
  const onOpenPreviewModal = () => {
    dispatch({
      type: "setOpenPreviewModal",
      payload: !state.openPreviewModal,
    });
  };

  const onOpenEditModal = () => {
    dispatch({
      type: "setOpenEditModal",
      payload: !state.openEditModal,
    });
  };
  // End of On Change Events

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Laboratory Test Name",
      width: 300,
      editable: true,
      align: "left",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "Description",
      type: "number",
      width: 300,
      editable: true,
      align: "left",
      headerAlign: "center",
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "type",
      headerName: "Test Type",
      type: "string",
      width: 200,
      editable: true,
      align: "center",
      headerAlign: "center",
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
            onClick={() => onClickPreview(id, row.name)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => onClickEdit(id, row.name)}
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

  React.useEffect(() => {
    retrieveTestCategory();
  }, []);
  return (
    <>
      <Helmet>
        <title>Test Management</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%" }}>
          <AdminHeader />
        </Box>
        <ModalComponent
          open={state.openPreviewModal}
          handleClose={onOpenPreviewModal}
          title={`TEST PREVIEW`}
          handleSubmit={handlePreviewSubmit}
          showButton={false}
          maxWidth="lg"
        >
          <Preview
            test_category_id={state.testCategoryId}
            test_category_field={state.testCategoryField}
            onClose={handlePreviewClose}
          />
        </ModalComponent>
        <ModalComponent
          open={state.openEditModal}
          handleClose={onOpenEditModal}
          title={`EDIT TEST`}
          handleSubmit={handleEditSubmit}
          showButton={false}
          maxWidth="lg"
        >
          <EditTestModal
            testField={state.testField}
            test_category_id={state.testCategoryId}
          />
        </ModalComponent>
        <Paper sx={{ p: { xs: 2, md: 3, width: "100%" } }}>
          <SectionHeader title="TEST MANAGEMENT" />
          <Box my={2}>
            <Box
              display={"flex"}
              justifyContent={"left"}
            >
              <Button variant="outlined" endIcon={<BiPlusCircle />} onClick={onClickAddTest}>
                Add New Test
              </Button>
            </Box>
          </Box>
          <DataGrid
            rows={state.testCategory}
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

export default ManageTest;
