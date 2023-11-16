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
  Typography,
  Stack,
} from "@mui/material";
import React from "react";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";

interface ECGProps {
  testResult?: ec_care_testResult;
  onClose?: () => void;
}

const ECGPreviewTable: React.FC<ECGProps> = ({ testResult, onClose }) => {
  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ANALYTE</TableCell>
              <TableCell align="center">RESULTS</TableCell>
              <TableCell align="center">UNIT</TableCell>
              <TableCell align="center">REF. RANGE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                POTASSIUM (K+)
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.potassium ? testResult?.potassium : "--"}
              </TableCell>
              <TableCell align="center">mmol/L</TableCell>
              <TableCell align="center">3.5 - 5.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                SODIUM (Na+)
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.sodium ? testResult?.sodium : "--"}
              </TableCell>
              <TableCell align="center">mmol/L</TableCell>
              <TableCell align="center">135.0 - 145.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                CHLORIDE (Cl)
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.chloride ? testResult?.chloride : "--"}
              </TableCell>
              <TableCell align="center">mmol/L</TableCell>
              <TableCell align="center">97.0-107.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                IONIZED CALCIUM (iCa)
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.ionizedCalcium ? testResult?.ionizedCalcium : "--"}
              </TableCell>
              <TableCell align="center">mmol/L</TableCell>
              <TableCell align="center">1.15-1.35</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                TOTAL CALCIUM
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.totalCalcium ? testResult?.totalCalcium : "--"}
              </TableCell>
              <TableCell align="center">mmol/L</TableCell>
              <TableCell align="center">2.30-2.70</TableCell>
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

export default ECGPreviewTable;
