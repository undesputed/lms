import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Paper } from "@mui/material";
import SectionHeader from "../../component/SectionHeader";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "refNo",
    headerName: "Ref. NO.",
    width: 150,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 70,
    align: "right",
    headerAlign: "right",
  },
  {
    field: "sex",
    headerName: "Sex",
    align: "left",
    headerAlign: "left",
    width: 70,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "referredBy",
    headerName: "Referred By",
    align: "left",
    headerAlign: "left",
    width: 150,
  },
  {
    field: "institute",
    headerName: "Institute",
    align: "left",
    headerAlign: "left",
    width: 150,
  },
  {
    field: "dateOfVisit",
    headerName: "Date Of Visit",
    align: "center",
    headerAlign: "center",
    width: 150,
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 130,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      // Customize the rendering of the "Edit" column cell
      return (
        <Button
          onClick={() => {
            // Handle the edit action here, e.g., open a modal or navigate to an edit page
            alert(`Editing ID ${params.row.id}`);
          }}
        >
          Edit
        </Button>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    phone: "09296604887",
    refNo: "Jon",
    age: 35,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 2,
    lastName: "Lannister",
    phone: "09296604887",
    refNo: "Cersei",
    age: 42,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 3,
    lastName: "Lannister",
    phone: "09296604887",
    refNo: "Jaime",
    age: 45,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 4,
    lastName: "Stark",
    phone: "09296604887",
    refNo: "Arya",
    age: 16,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 5,
    lastName: "Targaryen",
    phone: "09296604887",
    refNo: "Daenerys",
    age: null,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 6,
    lastName: "Melisandre",
    phone: "09296604887",
    refNo: null,
    age: 150,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 7,
    lastName: "Clifford",
    phone: "09296604887",
    refNo: "Ferrara",
    age: 44,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 8,
    lastName: "Frances",
    phone: "09296604887",
    refNo: "Rossini",
    age: 36,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 9,
    lastName: "Roxie",
    phone: "09296604887",
    refNo: "Harvey",
    age: 65,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 1,
    lastName: "Snow",
    phone: "09296604887",
    refNo: "Jon",
    age: 35,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 2,
    lastName: "Lannister",
    phone: "09296604887",
    refNo: "Cersei",
    age: 42,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 3,
    lastName: "Lannister",
    phone: "09296604887",
    refNo: "Jaime",
    age: 45,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 4,
    lastName: "Stark",
    phone: "09296604887",
    refNo: "Arya",
    age: 16,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 5,
    lastName: "Targaryen",
    phone: "09296604887",
    refNo: "Daenerys",
    age: null,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 6,
    lastName: "Melisandre",
    phone: "09296604887",
    refNo: null,
    age: 150,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 7,
    lastName: "Clifford",
    phone: "09296604887",
    refNo: "Ferrara",
    age: 44,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 8,
    lastName: "Frances",
    phone: "09296604887",
    refNo: "Rossini",
    age: 36,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
  {
    id: 9,
    lastName: "Roxie",
    phone: "09296604887",
    refNo: "Harvey",
    age: 65,
    sex: "M",
    referredBy: "Dr. Garces",
    institute: "Hipe Inc",
    dateOfVisit: "2023/30/09",
    edit: "Edit",
  },
];

export default function ManageDoctor() {
  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      <SectionHeader title="PATIENT REGISTRATION FORM" />
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </Paper>
  );
}
