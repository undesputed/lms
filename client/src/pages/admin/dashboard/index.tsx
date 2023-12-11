/**
 * Fetching Function
 *
 * onChange Function
 *
 * Remove Function
 *
 * Submit Function
 *
 */

import React, { useEffect, useReducer, useRef, useState } from "react";
import { Container, Box, Tab, Tabs, Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

import { useAppDispatch, useAppSelector } from "../../../actions/hooks";
import AddPatient from "../views/AddPatient";
import ManagePatient from "../views/ManagePatient";
import AdminHeader from "../utils/header";
import Footer from "../utils/footer";
import ManageDoctor from "../views/ManageDoctor";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import ModalComponent from "../component/Modal";
import PreviewPatient from "../component/PatientPreview";
import {
  addPatient,
  editPatient,
  fetchPatient,
  selectAllPatient,
  selectPatientById,
} from "../../../reducers/patient/patientSlice";
import { RootState } from "../../../app/store";
import {
  fetchReferral,
  selectAllReferrals,
} from "../../../reducers/referral/referralSlice";
import { fetchHmo, fetchHmoById } from "../../../reducers/hmo/hmoSlice";
import {
  fetchTestCategory,
  selectAllTestCategory,
  selectTestCategoryById,
} from "../../../reducers/testCategory/testCategory";
import { ec_care_patient } from "../../../entity/ec_care_patient";
import { ec_care_tests } from "../../../entity/ec_care_tests";
import { addResult } from "../../../reducers/testResult/testResultSlice";
import { ec_care_testResult } from "../../../entity/ec_care_testResult";
import { GridCellParams } from "@mui/x-data-grid";
import UpdatePatientForm from "../component/UpdatePatient";
import { useNavigate } from "react-router-dom";
import { getTestByTest } from "../../../reducers/tests/testSlice";
import { insertResult } from "../../../reducers/results/resultsSlice";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ width: "100%" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AdminDashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const currentTab = useRef<number>(0);
  const patients = useAppSelector(selectAllPatient);
  let testCategory = useAppSelector((state: RootState) =>
    selectAllTestCategory(state)
  );
  const patientStatus = useAppSelector(
    (state: RootState) => state.patient.status
  );

  // Start of Fetching Function
  const retrievePatient = async () => {
    try {
      await appDispatch(fetchPatient());
      await appDispatch(fetchReferral());
      await appDispatch(fetchHmo());
      await appDispatch(fetchTestCategory());
    } catch (err) {
      console.log("🚀 ~ file: index.tsx:59 ~ retrievePatient ~ err:", err);
    }
  };
  // End of Fetching Function

  // ----------------------------------

  // Start of OnChange Function
  const onChecked = (selection: number) => {
    dispatch({
      type: "setChecked",
      payload: selection,
    });
  };

  const onChangeTextField = (event: any) => {
    const { name, value } = event.target;
    dispatch({
      type: "setPatient",
      name: name,
      value: value,
    });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch({
      type: "setValue",
      payload: newValue,
    });
  };

  const onChangeUpdate = (event: any) => {
    const { name, value } = event.target;
    dispatch({
      type: "onChangeUpdateProfile",
      name: name,
      value: value,
    });
  };

  const openEditPatient = () => {
    dispatch({
      type: "openEditPatient",
      payload: !state.editPatient,
    });
  };

  const handleUpdate = async () => {
    console.log("Hello World");
  };

  const onAddTest = () => {
    state.checkedCategory &&
      state.checkedCategory?.map((item) => {
        const findData = state.addedTests?.find((d) => d.id === item);
        if (findData) {
          return;
        }
        const filteredData = testCategory.find((d) => d.id === item);
        dispatch({
          type: "setAddedTest",
          payload: filteredData,
        });
      });

    dispatch({
      type: "setChecked",
      payload: [],
    });
  };

  const onSelectPatient = (event: GridCellParams) => {
    navigate(`/admin/dashboard/result?id=${event.id}`);
  };

  const onEditPatient = (event: GridCellParams) => {
    dispatch({
      type: "setUpdateProfile",
      payload: event.row,
    });
    openEditPatient();
  };

  const handleModal = () => {
    dispatch({
      type: "handleOpen",
      payload: !state.open,
    });
  };
  // End of onChange Function

  // ----------------------------------

  // Start of Remove Function
  const onRemoveTest = () => {
    let filteredTests = testCategory;
    let filteredAdded = state.addedTests;
    state.onRemoveCheckedCat &&
      state.onRemoveCheckedCat?.map((item) => {
        filteredAdded = filteredAdded.filter((data) => {
          return data.id !== item;
        });
      });
    dispatch({
      type: "updateAddedTest",
      payload: filteredAdded,
    });
  };

  const onRemoveChecked = (selection: any) => {
    dispatch({
      type: "setRemovedChecked",
      payload: selection,
    });
  };
  // End of Remove Function

  // ----------------------------------

  // Start of Submit Functions
  const handleSubmit = async () => {
    try {
      const patient: ec_care_patient = state.patient;
      const response: any = await appDispatch(addPatient(patient));

      if (response.type === "patient/createPatient/fulfilled") {
        let resultData: ec_care_testResult[] = [];
        let test_id = [];

        state.addedTests?.map((item: any) => {
          const data: any = {
            id: null,
            test_id: item.id,
            patient_id: response.payload?.id,
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
              console.log(testResponse);
              testResponse.payload.map(async (item: any) => {
                let resData: any = {
                  result: null,
                  lms_patient_id: response.payload?.id,
                  lms_test_id: item.id,
                  testDate: new Date().toDateString().split("T")[0],
                };
                if (
                  item.field_id === 33 ||
                  item.field_id === 34 ||
                  item.field_id === 35 ||
                  item.field_id === 36 ||
                  item.field_id === 37 ||
                  item.field_id === 38 ||
                  item.field_id === 39
                ) {
                  resData.result = "NONE SEEN";
                }

                if (
                  item.field_id === 17 ||
                  item.field_id === 18 ||
                  item.field_id === 19 ||
                  item.field_id === 22 ||
                  item.field_id === 24 ||
                  item.field_id === 25 ||
                  item.field_id === 26
                ) {
                  resData.result = "NEGATIVE";
                }
                await appDispatch(insertResult(resData));
              });
            }
          });
        }

        if (resultData.length > 0) {
          resultData.forEach(async (item, index) => {
            await appDispatch(addResult(item));
          });
          retrievePatient();
          handleModal();
          dispatch({
            type: "setPatients",
            payload: {
              id: null,
              fullName: "",
              sex: 0,
              birthdate: "2000-01-01",
              dateOfVisit: new Date().toISOString().split("T")[0],
              address: "",
              email: "",
              phone: "",
              status: 0,
              created_at: new Date().toISOString().split("T")[0],
              updated_at: null,
              lms_company_id: null,
              lms_referral_id: null,
              lms_hmo_id: null,
            },
          });
          dispatch({
            type: "setValue",
            payload: 1,
          });
          currentTab.current = 1;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitUpdate = async () => {
    try {
      const updatedPatient: ec_care_patient = state.updateProfile;
      const response = await appDispatch(editPatient(updatedPatient));
      if (response.type === "patient/editPatient/fulfilled") {
        openEditPatient();
        retrievePatient();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onPreview = () => {
    if (
      state.patient.birthdate === null ||
      state.patient.fullName === "" ||
      state.patient.sex === 0
    ) {
      alert("All Fields are required!!!");
      return;
    }
    handleModal();
  };

  const onClear = () => {
    console.log(state);
  };
  //End of Submit Functions

  // ----------------------------------

  // Start of Other Functions
  function formatDateForMySQL(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      if (currentTab.current === 0) {
      }
    } else {
      // Handle other key presses (F1, F2, etc.) here
      switch (event.key) {
        case "F1":
          event.preventDefault();
          dispatch({
            type: "setValue",
            payload: 0,
          });
          currentTab.current = 0;
          break;
        case "F2":
          event.preventDefault();
          dispatch({
            type: "setValue",
            payload: 1,
          });
          currentTab.current = 1;
          break;
        case "F3":
          event.preventDefault();
          dispatch({
            type: "setValue",
            payload: 2,
          });
          currentTab.current = 2;
          break;
        case "F4":
          event.preventDefault();
          dispatch({
            type: "setValue",
            payload: 3,
          });
          currentTab.current = 3;
          break;
        default:
          break;
      }
    }
  };
  // End of Other Functions

  useEffect(() => {
    retrievePatient();
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%" }}>
          <AdminHeader />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box>
            <ModalComponent
              open={state.open}
              handleClose={handleModal}
              title="Patient Detail Preview"
              handleSubmit={handleSubmit}
              showButton={true}
            >
              <PreviewPatient
                patient={state.patient}
                tests={state.addedTests}
                age={state.age}
              />
            </ModalComponent>
          </Box>
          <Box>
            <ModalComponent
              open={state.editPatient}
              handleClose={openEditPatient}
              title="Update Patient Information"
              handleSubmit={handleUpdate}
              showButton={false}
            >
              <UpdatePatientForm
                patient={state.updateProfile}
                onChangeUpdate={onChangeUpdate}
                onSubmitUpdate={onSubmitUpdate}
              />
            </ModalComponent>
          </Box>
          <Box sx={{ borderBottom: 2, borderColor: "divider", mt: 2, pb: 2 }}>
            <Tabs
              value={state.value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab
                label="Add Patient"
                {...a11yProps(0)}
                sx={{
                  backgroundColor:
                    state.value === 0 ? "#3695D1" : "transparent",
                  fontWeight: "bolder",
                  fontSize: "18px",
                }}
              />
              <Tab
                label="Manage Patient"
                {...a11yProps(1)}
                sx={{
                  backgroundColor:
                    state.value === 1 ? "#3695D1" : "transparent",
                  fontWeight: "bolder",
                  fontSize: "18px",
                }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={state.value} index={0}>
            <AddPatient
              onChange={onChangeTextField}
              onPreview={onPreview}
              onClear={onClear}
              patient={state.patient}
              testCategory={testCategory}
              onChecked={onChecked}
              onRemoveChecked={onRemoveChecked}
              onAddTest={onAddTest}
              onRemoveTest={onRemoveTest}
              addedTest={state.addedTests}
              age={state.age}
            />
          </CustomTabPanel>
          <CustomTabPanel value={state.value} index={1}>
            <ManagePatient
              patientStatus={patientStatus}
              patient={patients}
              onSelectPatient={onSelectPatient}
              onEditPatient={onEditPatient}
            />
          </CustomTabPanel>
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default AdminDashboard;
