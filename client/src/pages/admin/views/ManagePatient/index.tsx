import * as React from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridCallbackDetails,
  GridCellParams,
  GridColDef,
  GridToolbar,
  MuiEvent,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Paper } from "@mui/material";

import { ec_care_patient } from "../../../../entity/ec_care_patient";
import { useAppSelector } from "../../../../actions/hooks";
import { RootState } from "../../../../app/store";
import { selectReferralById } from "../../../../reducers/referral/referralSlice";
import { selectHmoById } from "../../../../reducers/hmo/hmoSlice";
import SectionHeader from "../../component/SectionHeader";
import PatientSearchField from "../../component/PatientSearch";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Ref. No.",
    width: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 200,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "age",
    headerName: "Birthday",
    type: "number",
    width: 130,
    align: "right",
    headerAlign: "right",
    renderCell(params) {
      const dateObject = new Date(params.row.birthdate);
      const formattedDate = dateObject.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      return formattedDate;
    },
  },
  {
    field: "sex",
    headerName: "Sex",
    align: "left",
    headerAlign: "left",
    width: 70,
    renderCell(params) {
      return params.row.sex === 1 ? "Male" : "Female";
    },
  },
  {
    field: "phone",
    headerName: "Phone Number",
    align: "center",
    headerAlign: "center",
    width: 130,
  },
  {
    field: "lms_referral_id",
    headerName: "Referred By",
    align: "center",
    headerAlign: "center",
    width: 150,
    renderCell: (params) => {
      const referral = useAppSelector((state: RootState) =>
        selectReferralById(state, params.row.lms_referral_id)
      );

      return !referral
        ? "--"
        : referral
        ? `Dr. ${referral.surname || ""} ${referral.givenName || ""} ${
            referral.middleName || ""
          }`
        : "";
    },
  },
  {
    field: "lms_hmo_id",
    headerName: "HMO Affiliate",
    align: "center",
    headerAlign: "center",
    width: 150,
    renderCell: (params) => {
      const hmo = useAppSelector((state: RootState) =>
        selectHmoById(state, params.row.lms_hmo_id)
      );
      return !hmo ? "--" : hmo ? hmo.hmo_name : "";
    },
  },
  {
    field: "dateOfVisit",
    headerName: "Date Of Visit",
    align: "center",
    headerAlign: "center",
    width: 150,
    renderCell: (params) => {
      const dateObject = new Date(params.row.dateOfVisit);
      const formattedDate = dateObject.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      return formattedDate;
    },
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 130,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <>
          <GridActionsCellItem icon={<EditIcon />} label="Edit" />
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />
        </>
      );
    },
  },
];

interface PatientProps {
  onSelectPatient: (event: GridCellParams) => void;
  patient: ec_care_patient[];
  patientStatus: string;
  onEditPatient: (event: GridCellParams) => void;
}

const ManagePatient: React.FC<PatientProps> = ({
  onSelectPatient,
  patient,
  patientStatus,
  onEditPatient,
}) => {
  const [filteredData, setFilteredData] = React.useState(patient);
  const onCellClick = (
    params: GridCellParams,
    event: MuiEvent,
    details: GridCallbackDetails
  ) => {
    if (params.field !== "edit") {
      onSelectPatient(params);
    } else {
      onEditPatient(params);
    }
  };

  const onSearch = (event) => {
    const { value } = event.target;

    const filteredResult = patient.filter((item) =>
      Object.values(item).some(
        (field) =>
          field && field.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filteredResult);
  };
  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      <SectionHeader title="MANAGE PATIENT" />
      <PatientSearchField onChange={onSearch} />
      <DataGrid
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          display: "flex",
        }}
        rows={filteredData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        onCellClick={onCellClick}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Paper>
  );
};

export default ManagePatient;
