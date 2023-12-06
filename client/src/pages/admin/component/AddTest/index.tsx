import { Box, Button } from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import React from "react";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";
import { useAppSelector } from "../../../../actions/hooks";
import { RootState } from "../../../../app/store";
import { selectAllTestCategory } from "../../../../reducers/testCategory/testCategory";
import { selectTestResultByPatientId } from "../../../../reducers/testResult/testResultSlice";
import { ec_care_test_category } from "../../../../entity/ec_care_test_category";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Laboratory Test Name",
    width: 300,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    type: "number",
    width: 110,
    editable: true,
  },
];

interface AddTestProps {
  testCategory: ec_care_test_category[];
  testResult?: ec_care_testResult[];
  onChecked: (selection: any) => void;
  onSubmit: () => void;
  patient_id: number | string;
  onCancel: () => void;
}

const AddNewTest: React.FC<AddTestProps> = ({
  testCategory,
  testResult,
  onChecked,
  onSubmit,
  patient_id,
  onCancel,
}) => {
  return (
    <Box>
      <DataGrid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        rows={testCategory}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        onRowSelectionModelChange={onChecked}
      />
      <Box sx={{ textAlign: "center" }} mt={2}>
        <Button
          size="medium"
          variant="contained"
          sx={{ backgroundColor: "#3695D1", mx: 1 }}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          size="medium"
          variant="outlined"
          sx={{ color: "#3695D1", mx: 1 }}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewTest;
