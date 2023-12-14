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
  Box,
} from "@mui/material";
import React from "react";
import emmanSig from "../../../../../assets/image/esig/emmanuel garces.png";
import cenizaSig from "../../../../../assets/image/esig/DOC CENIZA.png";
import lorieSig from "../../../../../assets/image/esig/DOC Lorie.png";
import zamoraSig from "../../../../../assets/image/esig/Doc_Zamora_Esig-removebg-preview.png";
import pippoSig from "../../../../../assets/image/esig/DR. PIPPO MANGUBAT.png";
import romeroSig from "../../../../../assets/image/esig/DR. ROMERO.png";
import maritesSig from "../../../../../assets/image/esig/MAAM_MARITES-removebg-preview.png";
import katrinaSig from "../../../../../assets/image/esig/KRISTINA ATA.png";
import sorianoSig from "../../../../../assets/image/esig/DR SORIANO.png";

interface FooterProps {
  medTech?: any;
}

const FooterResult: React.FC<FooterProps> = ({ medTech }) => {
  return (
    <TableContainer
      sx={{
        pt: "50px",
        color: "black",
      }}
    >
      <Table aria-label="simple table" size="small">
        <TableBody>
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{
                border: "none",
                fontWeight: "600",
                color: "black",
                position: "relative",
              }}
            >
              <img
                src={katrinaSig}
                width={"30%"}
                style={{
                  position: "absolute",
                  top: -60,
                  left: 80,
                  zIndex: 1,
                }}
              />
              KRISTINA M. ATA
            </TableCell>
            <TableCell
              colSpan={3}
              sx={{
                border: "none",
                fontWeight: "600",
                textAlign: "right",
                color: "black",
                position: "relative",
              }}
            >
              <img
                src={sorianoSig}
                width={"50%"}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: -50,
                  right: 50,
                }}
              />
              Franco Alejandro L. Soriano MD.,FPCR
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} sx={{ border: "none", color: "black" }}>
              Registered Radiologic Technologist Lic. No.:0006393
            </TableCell>
            <TableCell
              colSpan={3}
              sx={{ border: "none", textAlign: "right", color: "black" }}
            >
              Radiologist
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FooterResult;
