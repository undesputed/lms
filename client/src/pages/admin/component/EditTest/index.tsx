import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  GridRowId,
  GridActionsCellItem,
  GridToolbar,
} from "@mui/x-data-grid";
import React, { useEffect, useRef, useState } from "react";
import { ec_care_test_field } from "../../../../entity/ec_care_test_field";
import { ec_care_tests } from "../../../../entity/ec_care_tests";
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi";
import { FaPlus, FaMinus } from "react-icons/fa6";
import SearchField from "../SearchField";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import PreviewIcon from "@mui/icons-material/Preview";

interface EditTestProps {
  testField: ec_care_test_field[];
  test?: ec_care_tests[];
  test_category_id: any;
  onClickSubmit: (addTest: any, removeTest: any) => void;
  onClickClose: () => void;
}
const EditTestModal: React.FC<EditTestProps> = ({
  testField,
  test,
  test_category_id,
  onClickSubmit,
  onClickClose,
}) => {
  const [chosen, setChose] = useState<any>(test);
  const [notChosen, setNotChosen] = useState<any>(testField);
  const chosenContainer = useRef([]);
  const notChosenContainer = useRef([]);
  // Test is the fields that is currenlty set in every test
  // TestField is the list of all the test fields in the database
  const onSubmit = () => {
    onClickSubmit(chosenContainer.current, notChosenContainer.current);
  };

  const onClickAdd = (id: any) => {
    const order = chosen?.length;

    const data: ec_care_tests = {
      id: null,
      test_id: test_category_id,
      field_id: id,
      testDate: null,
      orderNum: order + 1,
      status: 0,
      created_at: null,
      updated_at: null,
    };

    
    chosenContainer.current.push(data);

    const filterNotChosen = notChosen.filter((d) => d.id !== id);
    setNotChosen(filterNotChosen);

    const filterChosen = notChosen.find((d) => d.id === id);

    if (filterChosen) {
      setChose((prevChosen) => [...prevChosen, filterChosen]);
    } else {
      console.error(`No item found with id ${id}`);
    }
  };

  const onClickMinus = (id: any) => {
    const data = {
      test_id: test_category_id,
      field_id: id,
    };
    notChosenContainer.current.push(data);
    const filterNotChosen = chosen.filter((d) => d.id !== id);
    setChose(filterNotChosen);

    const filterChosen = chosen.find((d) => d.id === id);
    if (filterChosen) {
      setNotChosen((prevNotChosen) => [...prevNotChosen, filterChosen]);
    } else {
      console.error(`No item found with id ${id}`);
    }
  };

  useEffect(() => {
    const filterChosen = () => {
      const filter = notChosen.filter((d) => {
        return chosen.some((item) => item.field_id === d.id);
      });
      setChose(filter);
    };

    const filterNotChosen = () => {
      const filter = notChosen.filter((d) => {
        return !chosen.some((item) => item.field_id === d.id);
      });
      setNotChosen(filter);
    };

    filterChosen();
    filterNotChosen();
  }, []);

  const fieldColumn: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: true,
    },
    {
      field: "test_name",
      headerName: "Test name",
      width: 200,
      editable: true,
    },
    {
      field: "unit",
      headerName: "Unit",
      width: 100,
      editable: true,
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
            icon={
              <IconButton aria-label="right">
                <FaPlus size={20} color="green" />
              </IconButton>
            }
            label="Preview"
            className="textPrimary"
            onClick={() => onClickAdd(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const testColumn: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: true,
    },
    {
      field: "test_name",
      headerName: "Test name",
      width: 200,
      editable: true,
    },
    {
      field: "unit",
      headerName: "Unit",
      width: 100,
      editable: true,
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
            icon={
              <IconButton aria-label="right">
                <FaMinus size={20} />
              </IconButton>
            }
            label="Edit"
            className="textPrimary"
            onClick={() => onClickMinus(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
        my={2}
      >
        <Box>
          <Button
            size="medium"
            variant="contained"
            sx={{ backgroundColor: "#3695D1", mx: 1 }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Box>
        <Box>
          <Button
            size="medium"
            variant="contained"
            sx={{ backgroundColor: "#3695D1", mx: 1 }}
            onClick={onClickClose}
          >
            Close
          </Button>
        </Box>
      </Box>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box>
                <Typography component="h4" variant="h4" align="justify">
                  TESTS FIELDS
                </Typography>
              </Box>
              <Box display={"flex"}>
                <DataGrid
                  rows={notChosen}
                  columns={fieldColumn}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  pageSizeOptions={[10, 20]}
                  disableColumnFilter
                  disableDensitySelector
                  slots={{ toolbar: GridToolbar }}
                  slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box>
                <Typography component="h4" variant="h4" align="justify">
                  EXISTING TESTS FIELDS
                </Typography>
              </Box>
              <Box display={"flex"}>
                <DataGrid
                  rows={chosen}
                  columns={testColumn}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  pageSizeOptions={[10, 20]}
                  disableColumnFilter
                  disableDensitySelector
                  slots={{ toolbar: GridToolbar }}
                  slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EditTestModal;
