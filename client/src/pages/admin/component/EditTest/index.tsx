import { Box, Button, Paper } from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  GridRowId,
} from "@mui/x-data-grid";
import React from "react";
import { ec_care_test_field } from "../../../../entity/ec_care_test_field";

const columns: GridColDef[] = [
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
    field: "maleRefRange",
    headerName: "Male Ref. Range",
    type: "number",
    width: 110,
    align: "center",
    headerAlign: "center",
    editable: true,
  },
  {
    field: "femaleRefRange",
    headerName: "Female Ref. Range",
    width: 110,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "refRange",
    headerName: "Ref. Range",
    width: 110,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "desirableRefRange",
    headerName: "Desirable Ref. Range",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "borderlineRefRange",
    headerName: "Borderline Ref. Range",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "highRiskRefRange",
    headerName: "High Risk Ref. Range",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "other",
    headerName: "Others",
    width: 110,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

interface EditTestProps {
  testField: ec_care_test_field[];
  test_category_id: GridRowId | number | string;
}
const EditTestModal: React.FC<EditTestProps> = ({
  testField,
  test_category_id,
}) => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid rows={testField} columns={columns} checkboxSelection />
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3 },
          p: { xs: 2 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <Button
            size="medium"
            variant="contained"
            sx={{ backgroundColor: "#3695D1", mx: 1 }}
          >
            Submit
          </Button>
        </Box>
        <Box>
          <Button
            size="medium"
            variant="contained"
            sx={{ backgroundColor: "#3695D1", mx: 1 }}
          >
            Close
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditTestModal;
