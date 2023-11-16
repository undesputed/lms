import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";

interface CbcProps {
  testResult?: ec_care_testResult;
  onClose?: () => void;
}

const CbcPreviewTable: React.FC<CbcProps> = ({ testResult, onClose }) => {
  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>TEST</TableCell>
              <TableCell align="center">RESULT</TableCell>
              <TableCell align="center">UNIT</TableCell>
              <TableCell align="center">REF. RANGE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>BLOOD COUNT </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                WBC
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.wbc ? testResult?.wbc : "--"}
              </TableCell>
              <TableCell align="center">x 10^9/L</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}>
                    Male:
                  </Grid>
                  <Grid item xs={12} md={6}>
                    4-10
                  </Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}>
                    Female:
                  </Grid>
                  <Grid item xs={12} md={6}>
                    4-11
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                RBC
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.rbc ? testResult?.rbc : "--"}
              </TableCell>
              <TableCell align="center">x 10^12/L</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}>
                    Male:
                  </Grid>
                  <Grid item xs={12} md={6}>
                    4.00-5.50
                  </Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}>
                    Female:
                  </Grid>
                  <Grid item xs={12} md={6}>
                    3.50-5.00
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                HGB
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.hgb ? testResult?.hgb : "--"}
              </TableCell>
              <TableCell align="center">g/L</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}>
                    Male:
                  </Grid>
                  <Grid item xs={12} md={6}>
                    120-160
                  </Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}>
                    Female:
                  </Grid>
                  <Grid item xs={12} md={6}>
                    110-150
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                HCT
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.hct ? testResult?.hct : "--"}
              </TableCell>
              <TableCell align="center">%</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}>
                    Male:
                  </Grid>
                  <Grid item xs={12} md={6}>
                    40-54
                  </Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}>
                    Female:
                  </Grid>
                  <Grid item xs={12} md={6}>
                    37-47
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                PLT
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                {testResult?.plt ? testResult?.plt : "--"}
              </TableCell>
              <TableCell align="center">x 10^9/L</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6}>
                    100-300
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>DIFFERENTIAL COUNT</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                NEU%
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.neu ? testResult?.neu : "--"}
              </TableCell>
              <TableCell align="center">%</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}>
                    50-70
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                LYM%
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.lym ? testResult?.lym : "--"}
              </TableCell>
              <TableCell align="center">%</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}>
                    20-40
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                MON%
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.mon ? testResult?.mon : "--"}
              </TableCell>
              <TableCell align="center">%</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}>
                    10-15
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                EOS%
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.eos ? testResult?.eos : "--"}
              </TableCell>
              <TableCell align="center">%</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}>
                    1-5
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                BAS%
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.bas !== null ? testResult?.bas : "--"}
              </TableCell>
              <TableCell align="center">%</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6}>
                    0-1
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                TOTAL
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.total ? testResult?.total : "--"}
              </TableCell>
              <TableCell align="center">%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>RBC PARAMETERS</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                MCV
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.mcv ? testResult?.mcv : "--"}
              </TableCell>
              <TableCell align="center">fL</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}>
                    80-100
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                MCH
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.mch ? testResult?.mch : "--"}
              </TableCell>
              <TableCell align="center">pg</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}>
                    27-32
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                MCHC
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.mchc ? testResult?.mchc : "--"}
              </TableCell>
              <TableCell align="center">g/L</TableCell>
              <TableCell align="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6} textAlign={"right"}></Grid>
                  <Grid item xs={12} md={6}>
                    320-360
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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
            onClick={onClose}
          >
            Close
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CbcPreviewTable;
