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
import rrrcvSig from "../../../../../assets/image/esig/rrcv.png";
import { useAppDispatch } from "../../../../../actions/hooks";
import { fetchTestCatById } from "../../../../../reducers/testCategory/testCategory";
import katrinaSig from "../../../../../assets/image/esig/KRISTINA ATA.png";
import sorianoSig from "../../../../../assets/image/esig/DR SORIANO.png";

interface FooterProps {
  medTech?: any;
  test_id?: string | number;
}

const FooterResult: React.FC<FooterProps> = ({ medTech, test_id }) => {
  const [test, setTest] = React.useState<any>();
  const [type, setType] = React.useState<string>("");
  const appDispatch = useAppDispatch();

  React.useEffect(() => {
    async function fetchTestCat() {
      try {
        const response: any = await appDispatch(fetchTestCatById(test_id));
        if (response.type === "testCategory/fetchTextCatById/fulfilled") {
          setType(response.payload?.type);
          setTest(response.payload);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchTestCat();
  }, []);
  return (
    <TableContainer
      sx={{
        pt: "50px",
        color: "black",
      }}
    >
      <Table aria-label="simple table" size="small">
        <TableBody>
          {(function () {
            let footer: any = [];

            if (test?.name.toUpperCase() === "CHEST PA(PEDIA/ADULT)") {
              footer.push(
                <>
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
                        width={"40%"}
                        style={{
                          position: "absolute",
                          top: -60,
                          left: 140,
                          zIndex: 1,
                        }}
                      />
                      <Box textAlign={"center"}>KRISTINA M. ATA</Box>
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
                          right: 100,
                        }}
                      />
                      <Box textAlign={"center"}>
                        Franco Alejandro L. Soriano MD.,FPCR
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      sx={{
                        border: "none",
                        color: "black",
                      }}
                    >
                      <Box
                        textAlign={"center"}
                        width={"100%"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Box textAlign={"center"} width={"70%"}>
                          Registered Radiologic Technologist Lic. No.:0006393
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{
                        border: "none",
                        textAlign: "right",
                        color: "black",
                      }}
                    >
                      <Box textAlign={"center"}>Radiologist</Box>
                    </TableCell>
                  </TableRow>
                </>
              );
            } else {
              footer.push(
                <>
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
                      {(function () {
                        let sig = [];
                        switch (medTech) {
                          case "1":
                            sig.push(
                              <>
                                <img
                                  src={rrrcvSig}
                                  width={"30%"}
                                  style={{
                                    position: "absolute",
                                    top: -40,
                                    left: 80,
                                    zIndex: 1,
                                  }}
                                />
                              </>
                            );
                            break;
                          case "2":
                            sig.push(
                              <>
                                <img
                                  src={emmanSig}
                                  width={"30%"}
                                  style={{
                                    position: "absolute",
                                    top: -50,
                                    left: 80,
                                    zIndex: 1,
                                  }}
                                />
                              </>
                            );
                            break;
                          case "3":
                            sig.push(
                              <>
                                <img
                                  src={maritesSig}
                                  width={"30%"}
                                  style={{
                                    position: "absolute",
                                    top: -50,
                                    left: 80,
                                    zIndex: 1,
                                  }}
                                />
                              </>
                            );
                            break;
                        }
                        return sig;
                      })()}
                      {(function () {
                        let tech: string = "";
                        switch (medTech) {
                          case "1":
                            tech =
                              "ROCHELLE REUBEN C. VALLECERA, RMT, MLS (ASCPi)";
                            break;
                          case "2":
                            tech = "EMMANUEL B. GARCES, RMT";
                            break;
                          case "3":
                            tech = "MARITES DE LOS CIENTOS, RMT";
                            break;
                          default:
                            tech = "Hello world";
                            break;
                        }

                        return tech;
                      })()}
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
                        src={zamoraSig}
                        width={"50%"}
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          top: -50,
                          right: 50,
                        }}
                      />
                      THEODORE M. ZAMORA, MD, FPSP
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      sx={{ border: "none", color: "black" }}
                    >
                      {(function () {
                        switch (medTech) {
                          case "1":
                            return "Medical Technologist     Lic. No.: 0108908";
                          case "2":
                            return "Medical Technologist     Lic. No.: 0099087";
                          case "3":
                            return "Medical Technologist     Lic. No.: 0028407";
                          default:
                            return "Hello world";
                        }
                      })()}
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{
                        border: "none",
                        textAlign: "right",
                        color: "black",
                      }}
                    >
                      Pathologist Lic. No.: 93576
                    </TableCell>
                  </TableRow>
                </>
              );
            }

            return footer;
          })()}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FooterResult;
