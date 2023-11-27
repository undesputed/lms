import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import AdminHeader from "../../utils/header";
import SectionHeader from "../../component/SectionHeader";
import patient from "../../patient";
import AddTestField from "../../component/AddTestField";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { useAppDispatch, useAppSelector } from "../../../../actions/hooks";
import {
  fetchTestField,
  selectAllTestField,
} from "../../../../reducers/testField/testFieldSlice";
import { RootState } from "../../../../app/store";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import TestFieldComponent from "../../component/TestField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addTestCategory } from "../../../../reducers/testCategory/testCategory";
import { addTests } from "../../../../reducers/tests/testSlice";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Information",
  "Test Field Inputs",
  "Final Step",
];

export default function AddTestPage() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [activeStep, setActiveStep] = React.useState(0);
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectAllField = useAppSelector((state: RootState) =>
    selectAllTestField(state)
  );

  const handleNext = () => {
    console.log(state);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onChangeField = (event: any) => {
    dispatch({
      type: "setTestCategory",
      name: event.target.name,
      value: event.target.value,
    });
  };

  const onChecked = (selection: any) => {
    dispatch({
      type: "setSelectedFields",
      payload: selection,
    });
  };

  const onSubmit = async () => {
    try {
      const res: any = await appDispatch(addTestCategory(state.testCategory))
      if (res.type === "testCategory/addTestCategory/fulfilled") {
        state.selectedFields.forEach(async (d) => {
          const newTestData = {
            id: null,
            test_id: res.payload?.id,
            field_id: d,
            testDate: null,
            status: 0,
            created_at: null,
            updated_at: null
          }
          const testRes: any = await appDispatch(addTests(newTestData));
          if (testRes.type === "tests/addTests/fulfilled") {
            navigate("/admin/dashboard/test");
          } else {
            alert("Error encountered while created new Test")
          }
        })
      }
    } catch (err) {
      console.log(err);
    }
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "test_name", headerName: "Field Name", width: 200 },
  ];

  React.useEffect(() => {
    async function fetchAllField() {
      try {
        const res = await appDispatch(fetchTestField());
        if (res.type === "testField/fetchField/fulfilled") {
          dispatch({
            type: "setTestField",
            payload: res.payload,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchAllField();
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
        <Paper sx={{ p: { xs: 2, md: 3 } }}>
          <SectionHeader title="ADD NEW LABORATORY TESTS" />
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {(function () {
                  switch (activeStep) {
                    case 0:
                      return (
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                              <AddTestField
                                dropDown={false}
                                onChange={onChangeField}
                                label="LABORATORY TEST NAME"
                                textFieldName="name"
                              />
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <AddTestField
                                dropDown={false}
                                onChange={onChangeField}
                                label="DESCRIPTION"
                                textFieldName="description"
                              />
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <AddTestField
                                dropDown={false}
                                onChange={onChangeField}
                                label="DEPARTMENT"
                                textFieldName="department"
                              />
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <AddTestField
                                dropDown={false}
                                onChange={onChangeField}
                                label="PRICE"
                                textFieldName="price"
                                type="number"
                              />
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <AddTestField
                                dropDown={true}
                                onChange={onChangeField}
                                label="TYPE"
                                textFieldName="type"
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      );
                    case 1:
                      return (
                        <Box
                          component="form"
                          noValidate
                          sx={{ mt: 3, height: 500, width: 1 }}
                        >
                          <DataGrid
                            rows={selectAllField}
                            columns={columns}
                            checkboxSelection
                            disableColumnFilter
                            disableColumnSelector
                            disableDensitySelector
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                              toolbar: {
                                showQuickFilter: true,
                              },
                            }}
                            onRowSelectionModelChange={onChecked}
                          />
                        </Box>
                      );
                    case 2:
                      return (
                        <>
                          <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} md={6}>
                                <Typography component="h4" gutterBottom>
                                  LABORATORY TEST NAME:
                                </Typography>
                                <Typography variant="h3" gutterBottom>
                                  {state.testCategory.name}
                                </Typography>
                                <Typography component="h4" gutterBottom>
                                  DESCRIPTION:
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                  {state.testCategory.description}
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography component="h4" gutterBottom>
                                  PRICE:
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                  &#8369;{Number(state.testCategory.price).toFixed(2)}
                                </Typography>
                                <Typography component="h4" gutterBottom>
                                  TYPE:
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                  {state.testCategory.type}
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <TableContainer component={Paper}>
                                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                      <TableRow>
                                        <TableCell align="center">TEST NAME</TableCell>
                                        <TableCell align="center">UNIT</TableCell>
                                        <TableCell align="center">MALE REF. RANGE</TableCell>
                                        <TableCell align="center">FEMALE REF. RANGE</TableCell>
                                        <TableCell align="center">REF. RANGE</TableCell>
                                        <TableCell align="center">DESIRABLE REF. RANGE</TableCell>
                                        <TableCell align="center">BORDERLINE REF. RANGE</TableCell>
                                        <TableCell align="center">HIGH RISK REF. RANGE</TableCell>
                                        <TableCell align="center">OTHER</TableCell>
                                      </TableRow>
                                    </TableHead>
                                    {
                                      (function () {
                                        let content: any = []

                                        state.selectedFields.forEach((d) => {
                                          const findTest = state.testField.find((item) => item.id === d);

                                          content.push(
                                            <TableBody>

                                              <TableRow
                                                key={findTest.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                              >
                                                <TableCell component="th" scope="row">
                                                  {findTest.test_name}
                                                </TableCell>
                                                <TableCell align="center">{findTest.unit ? findTest.unit : '--'}</TableCell>
                                                <TableCell align="center">{findTest.maleRefRange ? findTest.maleRefRange : '--'}</TableCell>
                                                <TableCell align="center">{findTest.femaleRefRange ? findTest.femaleRefRange : '--'}</TableCell>
                                                <TableCell align="center">{findTest.refRange ? findTest.refRange : '--'}</TableCell>
                                                <TableCell align="center">{findTest.desirableRefRange ? findTest.desirableRefRange : '--'}</TableCell>
                                                <TableCell align="center">{findTest.borderlineRefRange ? findTest.borderlineRefRange : '--'}</TableCell>
                                                <TableCell align="center">{findTest.highRiskRefRange ? findTest.highRiskRefRange : '--'}</TableCell>
                                                <TableCell align="center">{findTest.other ? findTest.other : '--'}</TableCell>
                                              </TableRow>
                                            </TableBody>

                                          )
                                        })

                                        return content;
                                      }())
                                    }
                                  </Table>
                                </TableContainer>
                              </Grid>
                            </Grid >
                          </Box>
                        </>
                      );
                  }
                })()}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  {/* <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button> */}
                  <Box sx={{ flex: "1 1 auto" }} />
                  {
                    activeStep === steps.length - 1 ?
                      (
                        <Button onClick={onSubmit} variant="outlined">
                          SUBMIT
                        </Button>
                      ) : (
                        <Button onClick={handleNext} variant="outlined">
                          NEXT
                        </Button>
                      )
                  }
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Paper >
      </Container >
    </>
  );
}
