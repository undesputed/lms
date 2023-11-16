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

interface UrinalysisProps {
  testResult?: ec_care_testResult;
  onClose?: () => void;
}

const UrinalysisPreviewTable: React.FC<UrinalysisProps> = ({
  testResult,
  onClose,
}) => {
  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} align="right">
                PHYSICAL AND CHEMICAL ANALYSIS
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell colSpan={2} align="left">
                MICROSCOPIC ANALYSIS
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Color
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.color ? testResult?.color : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right">WBC</TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.wbc ? testResult?.wbc : "--"}
              </TableCell>
              <TableCell align="center">/HPF</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Transparency
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.transparency ? testResult?.transparency : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right">RBC</TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.rbc ? testResult?.rbc : "--"}
              </TableCell>
              <TableCell align="center">/HPF</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Leukocyte
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.leukocyte ? testResult?.leukocyte : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right">Bacteria</TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.bacteria ? testResult?.bacteria : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Nitrite
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.nitrite ? testResult?.nitrite : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right">Epithelial Cells</TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.epithelialCells
                  ? testResult?.epithelialCells
                  : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Urobilinogen
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.urobilinogen ? testResult?.urobilinogen : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right">Amorphous Phosphate</TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.amorphousUrate ? testResult?.amorphousUrate : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Protein
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.protein ? testResult?.protein : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right">Mucus Threads</TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.mucusThreads ? testResult?.mucusThreads : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Protein
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.protein ? testResult?.protein : "--"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Blood
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.blood ? testResult?.blood : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right">Others</TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.others ? testResult?.others : "--"}
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Sp Gravity
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.spGravity ? testResult?.spGravity : "--"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Ketone
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.ketone ? testResult?.ketone : "--"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Bilirubin
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.bilirubin ? testResult?.bilirubin : "--"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Glucose
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
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="right">
                Remarks
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {testResult?.remarks ? testResult?.remarks : "--"}
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

export default UrinalysisPreviewTable;
