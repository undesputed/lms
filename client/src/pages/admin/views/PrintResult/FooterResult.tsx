import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import React from "react";

const FooterResult = () => {
  return (
    <TableContainer
      sx={{
        pt: "50px",
      }}
    >
      <Table aria-label="simple table" size="small">
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} sx={{ border: "none", fontWeight: "600" }}>
              ROCHELLE REUBEN C. VALLECERA, RMT, MLS (ASCPi){" "}
            </TableCell>
            <TableCell colSpan={3} sx={{ border: "none", fontWeight: "600" }}>
              THEODORE M. ZAMORA, MD, FPSP
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} sx={{ border: "none" }}>
              Medical Technologist Lic. No.: 0108908
            </TableCell>
            <TableCell colSpan={3} sx={{ border: "none" }}>
              Pathologist Lic. No.: 93576
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FooterResult;
