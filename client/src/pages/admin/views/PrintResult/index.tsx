import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import FooterResult from "./component/FooterResult";
import Header from "./component/Header";
import CBCPrint from "./CBC";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../actions/hooks";
import { id } from "date-fns/locale";
import {
  fetchPatient,
  selectPatientById,
} from "../../../../reducers/patient/patientSlice";
import { fetchTestCategory } from "../../../../reducers/testCategory/testCategory";
import {
  fetchResult,
  fetchResultByPatient,
  fetchTotalResultByPatient,
} from "../../../../reducers/testResult/testResultSlice";
import { RootState } from "../../../../app/store";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import PatientHeader from "./component/patientHeader";
import TestContent from "./component/testContent";

const TablePreview = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const patient_id = searchParams.get("id");
  const medTechId = searchParams.get("medTech");
  const patient = useAppSelector((state: RootState) =>
    selectPatientById(state, patient_id)
  );
  const retrieveTestResult = async () => {
    try {
      await appDispatch(fetchPatient());
      await appDispatch(fetchTestCategory());
      await appDispatch(fetchResult());
      if (!id) {
        navigate("/admin/dashboard");
      }
      const result = await appDispatch(fetchResultByPatient(patient_id));
      if (result.type === "testResult/fetchTestResultsByPatient/fulfilled") {
        dispatch({
          type: "setTestResult",
          payload: result.payload,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (!patient_id) {
      navigate("/admin/dashboard");
    }
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
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Helmet>
        <title>Print Result</title>
      </Helmet>
      <Stack>
        {state.testResult.map((d) => {
          return (
            <Paper
              sx={{
                p: { xs: 2, md: 3 },
                height: "1030px",
                width: "816px",
                display: "flex",
                flexDirection: "column",
                color: "black",
              }}
            >
              <Box>
                <Header />
                <PatientHeader patient={state.patient} />
              </Box>

              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <TestContent test_id={d.test_id} patient_id={patient_id} />
              </Box>

              <Box sx={{ marginTop: "auto" }}>
                <FooterResult medTech={medTechId} />
              </Box>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default TablePreview;
