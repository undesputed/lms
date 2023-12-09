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
              {/* {(function () {
                let tech: string = "";
                switch (medTech) {
                  case 1:
                    tech = "ROCHELLE REUBEN C. VALLECERA, RMT, MLS (ASCPi)";
                    break;
                  case 2:
                    tech = "EMMANUEL B. GARCES, RMT";
                    break;
                  case 3:
                    tech = "MARITES DE LOS CIENTOS, RMT";
                    break;
                  default:
                    tech = "Hello world";
                    break;
                }

                return tech;
              })()} */}
              ROCHELLE REUBEN C. VALLECERA, RMT, MLS (ASCPi)
            </TableCell>
            <TableCell colSpan={3} sx={{ border: "none", fontWeight: "600" }}>
              THEODORE M. ZAMORA, MD, FPSP
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} sx={{ border: "none" }}>
              {/* {(function () {
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
              })()} */}
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
