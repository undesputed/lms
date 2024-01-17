import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
} from "@mui/material";
import React from "react";
import { ec_care_patient } from "../../../../../entity/ec_care_patient";
import { useAppDispatch } from "../../../../../actions/hooks";
import { fetchResultByTestField } from "../../../../../reducers/results/resultsSlice";
import { fetchTestCatById } from "../../../../../reducers/testCategory/testCategory";

interface PatientProps {
  patient: ec_care_patient;
  test_id: number | string;
}

const PatientHeader: React.FC<PatientProps> = ({ patient, test_id }) => {
  const [test, setTest] = React.useState<any>();
  const [type, setType] = React.useState<string>("");
  const appDispatch = useAppDispatch();

  function calculateAge(dateOfBirth: string | Date | null): number {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  }

  React.useEffect(() => {
    async function fetchTestCat() {
      try {
        const response: any = await appDispatch(fetchTestCatById(test_id));
        if (response.type === "testCategory/fetchTextCatById/fulfilled") {
          setType(response.payload?.type);
          setTest(response.payload);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchTestCat();
  }, []);

  return (
    <>
      <TableContainer>
        <Table
          aria-label="a dense table"
          size="small"
          sx={{
            color: "black",
            minWidth: 650,
          }}
        >
          <TableBody>
            {(function () {
              let header: any = [];
              if (test?.name.toUpperCase() === "CHEST PA(PEDIA/ADULT)") {
                header.push(
                  <>
                    <TableRow>
                      <TableCell
                        sx={{
                          border: "none",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        <Grid container>
                          <Grid item xs={2} md={2}>
                            Name:
                          </Grid>
                          <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                            {patient.fullName.toUpperCase()}
                          </Grid>
                          <Grid item xs={2} md={2}>
                            Date:
                          </Grid>
                          <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                            {(function () {
                              const dateObject = new Date(patient.dateOfVisit);
                              const formattedDate =
                                dateObject.toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                });

                              return formattedDate;
                            })()}
                          </Grid>
                          <Grid item xs={2} md={2}>
                            ID NO:
                          </Grid>
                          <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                            {(function () {
                              const getDay = new Date(patient.dateOfVisit);
                              const year = getDay.getUTCFullYear();
                              const month = getDay.getUTCMonth() + 1;
                              const day = getDay.getUTCDate();
                              const number = patient.id;
                              return month + "" + day + "" + year + "" + number;
                            })()}
                          </Grid>
                          <Grid item xs={2} md={2}>
                            DOB:
                          </Grid>
                          <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                            {(function () {
                              if (!patient.birthdate) {
                                return "N/A";
                              }
                              const dateObject = new Date(patient.birthdate);
                              const formattedDate =
                                dateObject.toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                });

                              return formattedDate;
                            })()}
                          </Grid>
                          <Grid item xs={2} md={2}>
                            EXAMINATION:
                          </Grid>
                          <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                            {test?.name}
                          </Grid>
                          <Grid item xs={2} md={2}>
                            AGE/SEX:
                          </Grid>
                          <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                            {(function () {
                              let content = [];
                              content.push(calculateAge(patient.birthdate));
                              content.push(" / ");
                              switch (patient.sex) {
                                case 1:
                                  content.push("MALE");
                                  break;
                                case 2:
                                  content.push("FEMALE");
                                  break;
                                default:
                                  content.push("NONE");
                                  break;
                              }
                              return content;
                            })()}
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </>
                );
              } else {
                header.push(
                  <>
                    <TableRow>
                      <TableCell
                        sx={{
                          border: "none",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        <Grid container>
                          <Grid item xs={2} md={2}>
                            Name:
                          </Grid>
                          <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                            {patient.fullName.toUpperCase()}
                          </Grid>
                          <Grid item xs={2} md={2}>
                            Date:
                          </Grid>
                          <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                            {(function () {
                              const dateObject = new Date(patient.dateOfVisit);
                              const formattedDate =
                                dateObject.toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                });

                              return formattedDate;
                            })()}
                          </Grid>
                          <Grid item xs={2} md={2}>
                            Age / Sex:
                          </Grid>
                          <Grid
                            item
                            xs={10}
                            md={10}
                            sx={{ fontWeight: "light" }}
                          >
                            {(function () {
                              let content = [];
                              content.push(calculateAge(patient.birthdate));
                              content.push(" / ");
                              switch (patient.sex) {
                                case 1:
                                  content.push("MALE");
                                  break;
                                case 2:
                                  content.push("FEMALE");
                                  break;
                                default:
                                  content.push("OTHER");
                                  break;
                              }
                              return content;
                            })()}
                          </Grid>
                          <Grid item xs={2} md={2}>
                            Birth date:
                          </Grid>
                          <Grid
                            item
                            xs={10}
                            md={10}
                            sx={{ fontWeight: "light" }}
                          >
                            {(function () {
                              if (!patient.birthdate) {
                                return "N/A";
                              }
                              const dateObject = new Date(patient.birthdate);
                              const formattedDate =
                                dateObject.toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                });

                              return formattedDate;
                            })()}
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </>
                );
              }
              return header;
            })()}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PatientHeader;
