import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../actions/hooks";
import { fetchResultByTestField } from "../../../../reducers/results/resultsSlice";
import { Box, Grid, TextField, Typography } from "@mui/material";
import FieldComponent from "../Field";

interface EditTestProps {
  patientResult: any;
  handleFieldChange: (id: number, event: any) => void;
}

const EditTestModal: React.FC<EditTestProps> = ({
  patientResult,
  handleFieldChange,
}) => {
  return (
    <>
      <Box>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {(function () {
              const content: any = [];
              patientResult &&
                patientResult.forEach((d) => {
                  content.push(
                    <Grid item xs={12} md={12}>
                      <Box
                        width={"lg"}
                        display={"flex"}
                        justifyContent={"center"}
                        flexDirection={"row"}
                        alignItems={"center"}
                      >
                        <Grid container xs={12} md={12}>
                          <Grid
                            item
                            xs={12}
                            md={4}
                            display={"flex"}
                            alignItems={"center"}
                          >
                            <Typography
                              variant="h3"
                              display="block"
                              gutterBottom
                              sx={{
                                fontWeight: "bolder",
                                fontSize: "16px",
                              }}
                            >
                              {d.test_name}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={2}
                            display={"flex"}
                            alignItems={"center"}
                          >
                            <Typography
                              variant="h4"
                              display="block"
                              gutterBottom
                              sx={{
                                fontWeight: "bolder",
                                fontSize: "20px",
                              }}
                            >
                              :
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={6}
                            display={"flex"}
                            alignItems={"center"}
                          >
                            <TextField
                              name={d.test_name}
                              required
                              fullWidth
                              id={d.test_name}
                              placeholder={d.test_name}
                              defaultValue={d.result}
                              onChange={(e) =>
                                handleFieldChange(d.patient_results_id, e)
                              }
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  );
                });
              return content;
            })()}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default EditTestModal;
