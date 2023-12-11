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

interface PatientProps {
  patient: ec_care_patient;
}

const PatientHeader: React.FC<PatientProps> = ({ patient }) => {
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
            <TableRow>
              <TableCell
                sx={{ border: "none", fontWeight: "bold", color: "black" }}
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
                      const formattedDate = dateObject.toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      );

                      return formattedDate;
                    })()}
                  </Grid>
                  <Grid item xs={2} md={2}>
                    Age / Sex:
                  </Grid>
                  <Grid item xs={10} md={10} sx={{ fontWeight: "light" }}>
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
                  <Grid item xs={10} md={10} sx={{ fontWeight: "light" }}>
                    {(function () {
                      const dateObject = new Date(patient.birthdate);
                      const formattedDate = dateObject.toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      );

                      return formattedDate;
                    })()}
                  </Grid>
                </Grid>
              </TableCell>
              {/* <TableCell sx={{ border: "none", color: "black" }} colSpan={2}>
                {patient.fullName.toUpperCase()}
              </TableCell>
              <TableCell
                sx={{ border: "none", fontWeight: "bold", color: "black" }}
              >
                DATE:
              </TableCell>
              <TableCell sx={{ border: "none", color: "black" }}>
                {(function () {
                  const dateObject = new Date(patient.dateOfVisit);
                  const formattedDate = dateObject.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  });

                  return formattedDate;
                })()}
              </TableCell>
              <TableCell sx={{ border: "none" }}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ border: "none", fontWeight: "bold", color: "black" }}
              >
                Age / Sex:
              </TableCell>
              <TableCell sx={{ border: "none", color: "black" }} colSpan={2}>
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
              </TableCell>
              <TableCell sx={{ border: "none" }}></TableCell>
              <TableCell sx={{ border: "none" }}></TableCell>
              <TableCell sx={{ border: "none" }}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ border: "none", fontWeight: "bold", color: "black" }}
              >
                Birth date:
              </TableCell>
              <TableCell sx={{ border: "none", color: "black" }} colSpan={2}>
                {(function () {
                  const dateObject = new Date(patient.birthdate);
                  const formattedDate = dateObject.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  });

                  return formattedDate;
                })()}
              </TableCell>
              <TableCell sx={{ border: "none" }}></TableCell>
              <TableCell sx={{ border: "none" }}></TableCell>
              <TableCell sx={{ border: "none" }}></TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PatientHeader;
