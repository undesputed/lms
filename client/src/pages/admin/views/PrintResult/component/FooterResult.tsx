import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

interface FooterProps {
  medTech?: any;
}

const FooterResult: React.FC<FooterProps> = ({ medTech }) => {
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
              {(function () {
                console.log(medTech);
                switch (medTech) {
                  case 1:
                    return "ROCHELLE REUBEN C. VALLECERA, RMT, MLS (ASCPi)";
                  case 2:
                    return "EMMANUEL B. GARCES, RMT";
                  case 3:
                    return "MARITES DE LOS CIENTOS, RMT";
                  default:
                    return "Hello world";
                }
              })()}
            </TableCell>
            <TableCell colSpan={3} sx={{ border: "none", fontWeight: "600" }}>
              THEODORE M. ZAMORA, MD, FPSP
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} sx={{ border: "none" }}>
              {(function () {
                switch (medTech) {
                  case 1:
                    return "Medical Technologist     Lic. No.: 0108908";
                  case 2:
                    return "Medical Technologist     Lic. No.: 0099087";
                  case 3:
                    return "Medical Technologist     Lic. No.: 0028407";
                  default:
                    return "Hello world";
                }
              })()}
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
