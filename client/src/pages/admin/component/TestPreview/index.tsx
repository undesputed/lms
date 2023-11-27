import React from "react";
import CbcPreviewTable from "../Cbc/previewTable";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";
import UrinalysisPreviewTable from "../Urinalysis/previewTable";
import StoolPreviewTable from "../Stool/previewTable";
import CCFastingPreviewTable from "../CCFasting/previewTable";
import CTBTPreviewTable from "../CTBT/previewTable";
import ECGPreviewTable from "../ECG/previewTable";
import { Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

interface TestPreviewProps {
  patientResult: any
}

const TestPreview: React.FC<TestPreviewProps> = ({
  patientResult
}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">TEST NAME</TableCell>
              <TableCell align="center">RESULTS</TableCell>
              <TableCell align="left">UNIT</TableCell>
            </TableRow>
          </TableHead>
          {
            (function () {
              let content: any = []

              patientResult.forEach((d) => {

                content.push(
                  <TableBody sx={{ border: "1px solid #ccc;" }}>

                    <TableRow
                      key={d.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right" component="th" scope="row">
                        {d.test_name.toUpperCase()}:
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>{d.result ? d.result : '--'}</TableCell>
                      <TableCell align="left">{d.unit ? d.unit : '--'}</TableCell>
                    </TableRow>
                  </TableBody>

                )
              })

              return content;
            }())
          }
        </Table>
      </TableContainer>
    </>
  )
};

export default TestPreview;
