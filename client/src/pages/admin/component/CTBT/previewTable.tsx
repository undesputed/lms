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

const CTBTPreviewTable: React.FC<CCFastingProps> = ({
  testResult,
  onClose,
}) => {
  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">TEST</TableCell>
              <TableCell align="center">RESULTS</TableCell>
              <TableCell align="center">REF. RANGE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                BLEEDING TIME:
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.bleedingTime ? testResult?.bleedingTime : "--"}
              </TableCell>
              <TableCell align="center">2-7 mins</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                CLOTTING TIME:
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.clottingTime ? testResult?.clottingTime : "--"}
              </TableCell>
              <TableCell align="center">5-15 mins</TableCell>
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

export default CTBTPreviewTable;
