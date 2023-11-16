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

interface CCFastingProps {
  testResult?: ec_care_testResult;
  onClose?: () => void;
}

const CCFastingPreviewTable: React.FC<CCFastingProps> = ({
  testResult,
  onClose,
}) => {
  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ANALYTE</TableCell>
              <TableCell align="center">RESULTS</TableCell>
              <TableCell align="center">UNIT</TableCell>
              <TableCell align="center" colSpan={2}>
                REF. RANGE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Cholesterol
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.cholesterol ? testResult?.cholesterol : "--"}
              </TableCell>
              <TableCell align="center">mg/dL</TableCell>
              <TableCell align="right">
                <Stack spacing={1}>
                  <Typography>Desirable</Typography>
                  <Typography>Borderline</Typography>
                  <Typography>HIgh risk</Typography>
                </Stack>
              </TableCell>
              <TableCell align="left">
                <Stack spacing={1}>
                  <Typography>&lt; 200</Typography>
                  <Typography>200 - 239</Typography>
                  <Typography>&gt; 240</Typography>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Triglycerides
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.triglycerides ? testResult?.triglycerides : "--"}
              </TableCell>
              <TableCell align="center">mg/dL</TableCell>
              <TableCell align="right">
                <Stack spacing={1}>
                  <Typography>Male</Typography>
                  <Typography>Female</Typography>
                </Stack>
              </TableCell>
              <TableCell align="left">
                <Stack spacing={1}>
                  <Typography>40 - 160</Typography>
                  <Typography>35 - 145</Typography>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                HDL Cholesterol
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.hdlCholesterol ? testResult?.hdlCholesterol : "--"}
              </TableCell>
              <TableCell align="center">mg/dL</TableCell>
              <TableCell align="right">
                <Stack spacing={1}>
                  <Typography>Male</Typography>
                  <Typography>Female</Typography>
                </Stack>
              </TableCell>
              <TableCell align="left">
                <Stack spacing={1}>
                  <Typography>35-50</Typography>
                  <Typography>45-60</Typography>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                LDL Cholesterol
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.ldlCholesterol ? testResult?.ldlCholesterol : "--"}
              </TableCell>
              <TableCell align="center">mg/dL</TableCell>
              <TableCell align="right">
                <Stack spacing={1}>
                  <Typography>Desirable</Typography>
                  <Typography>Borderline</Typography>
                  <Typography>HIgh risk</Typography>
                </Stack>
              </TableCell>
              <TableCell align="left">
                <Stack spacing={1}>
                  <Typography>&lt; 114</Typography>
                  <Typography>115 - 150</Typography>
                  <Typography>&gt; 151</Typography>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Fasting Blood Sugar (Glucose)
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.glucose ? testResult?.glucose : "--"}
              </TableCell>
              <TableCell align="center">mg/dL</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="left">70-110</TableCell>
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

export default CCFastingPreviewTable;
