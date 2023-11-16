import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { BiChevronsRight, BiChevronsLeft, BiSearchAlt } from "react-icons/bi";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useAppSelector } from "../../../../actions/hooks";
import { RootState } from "../../../../app/store";
import { selectAllTestCategory } from "../../../../reducers/testCategory/testCategory";
import SearchField from "../SearchField";
import { ec_care_test_category } from "../../../../entity/ec_care_test_category";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Lab Test",
    width: 200,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
    align: "right",
    headerAlign: "right",
  },
];

interface TestListProps {
  testCategory: ec_care_test_category[];
  onChecked: (selection: any) => void;
  onRemoveChecked: (selection: any) => void;
  onAddTest: () => void;
  onRemoveTest: () => void;
  addedTest: ec_care_test_category[];
}

const TestList: React.FC<TestListProps> = ({
  testCategory,
  onChecked,
  onRemoveChecked,
  onAddTest,
  onRemoveTest,
  addedTest,
}) => {
  const [filteredData, setFilteredData] = React.useState<
    ec_care_test_category[] | null
  >(testCategory);
  const [addedFilteredData, setAddedFilteredData] = React.useState<
    ec_care_test_category[] | null
  >(addedTest);

  const onSearch = (event) => {
    const { value } = event.target;
    const filteredResult = testCategory.filter((item) =>
      Object.values(item).some(
        (field) =>
          field && field.toString().toLowerCase().includes(value.toLowerCase())
      )
    );

    setFilteredData(filteredResult);
  };

  const onSearchAdded = (event) => {
    const { value } = event.target;
    const filteredResult = addedTest.filter((item) =>
      Object.values(item).some(
        (field) =>
          field && field.toString().toLowerCase().includes(value.toLowerCase())
      )
    );

    setAddedFilteredData(filteredResult);
  };

  React.useEffect(() => {
    if (addedTest.length !== 0) {
      let filteredResult = testCategory;
      setAddedFilteredData(addedTest);
      addedTest?.forEach((item) => {
        filteredResult = filteredResult.filter((data, index) => {
          return data.id !== item.id;
        });
      });
      setFilteredData(filteredResult);
    }
  }, [addedTest]);

  React.useEffect(() => {
    if (testCategory.length !== 0) {
      if (filteredData.length === 0) {
        setFilteredData(testCategory);
      }
    }
  }, [testCategory]);

  return (
    <>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
      >
        <Box display="grid">
          <Typography component="h1" variant="h3" align="justify">
            LABORATORY TESTS LISTS
          </Typography>
        </Box>
        <hr style={{ height: "3px", backgroundColor: "#1580c3" }} />
        <hr
          style={{
            height: "15px",
            backgroundColor: "#1580c3",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5.5}>
              <Box display={"flex"} flexDirection={"column"}>
                <SearchField onChange={onSearch} />
                <Box display={"flex"}>
                  <DataGrid
                    rows={filteredData}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                      },
                    }}
                    pageSizeOptions={[10, 20]}
                    checkboxSelection
                    onRowSelectionModelChange={onChecked}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Box display={"flex"} flexDirection={"column"}>
                <IconButton aria-label="right">
                  <BiChevronsRight size={50} onClick={onAddTest} />
                </IconButton>
                <IconButton aria-label="left">
                  <BiChevronsLeft size={50} onClick={onRemoveTest} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Box display={"flex"} flexDirection={"column"}>
                <SearchField onChange={onSearchAdded} />
                <Box display={"flex"}>
                  <DataGrid
                    rows={addedFilteredData}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                      },
                    }}
                    pageSizeOptions={[10, 20]}
                    checkboxSelection
                    onRowSelectionModelChange={onRemoveChecked}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default TestList;
