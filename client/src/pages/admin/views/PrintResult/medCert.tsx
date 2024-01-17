import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import React from "react";
import logo from "../../../../assets/image/logo/Logomark-01.png";
import { Helmet } from "react-helmet-async";

import docJin from "../../../../assets/image/esig/DOC JIN.png";

const MedCert = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Helmet>
          <title>Print Result</title>
        </Helmet>
        <Stack>
          <Paper
            sx={{
              p: { xs: 2, md: 3 },
              height: "1030px",
              width: "816px",
              display: "flex",
              flexDirection: "column",
              color: "black",
            }}
          >
            <Box>
              <TableContainer
                sx={{
                  color: "black",
                }}
              >
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ border: "none", py: "0", my: "0" }}
                      ></TableCell>
                      <TableCell
                        sx={{ border: "none", py: "0", my: "0" }}
                      ></TableCell>
                      <TableCell
                        sx={{ border: "none", py: "0", my: "0" }}
                      ></TableCell>
                      <TableCell
                        sx={{ border: "none", py: "0", my: "0" }}
                      ></TableCell>
                      <TableCell
                        sx={{ border: "none", py: "0", my: "0" }}
                      ></TableCell>
                      <TableCell
                        sx={{ border: "none", py: "0", my: "0" }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        rowSpan={4}
                        colSpan={2}
                        width={200}
                        height={150}
                        sx={{
                          position: "relative",
                          backgroundImage: `url(${logo})`,
                          backgroundPosition: "center",
                          backgroundSize: "80%",
                          backgroundOrigin: "border-box",
                          backgroundRepeat: "no-repeat",
                          border: "none",
                        }}
                      ></TableCell>
                      <TableCell
                        colSpan={4}
                        sx={{ border: "none", py: "0", my: "0" }}
                        height={"20px"}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: "900",
                            color: "#0d7f3f",
                            fontSize: "40px",
                            letterSpacing: 30,
                          }}
                          textAlign={"center"}
                        >
                          EC-CARE
                        </Typography>
                        <hr
                          style={{
                            color: "gray",
                          }}
                        />
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: "800",
                            color: "#1580c3",
                            fontSize: "20px",
                            letterSpacing: 10,
                          }}
                          textAlign={"center"}
                        >
                          MEDICAL LABORATORY
                        </Typography>
                        <Typography variant="h5" textAlign={"center"}>
                          41 Ouano Ext., Ibabao Estancia, Mandaue City, Cebu,
                          6014 Contact
                        </Typography>
                        <Typography variant="h5" textAlign={"center"}>
                          No: 254 9527 / 09270796274 / 09202629412
                        </Typography>
                        <Typography variant="h5" textAlign={"center"}>
                          Email: eccaremedical@gmail.com
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box display={"flex"} flexDirection={"column"} my={10} mx={10}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bolder",
                }}
              >
                MEDICAL CERTIFICATE
              </p>
              <p style={{ textAlign: "right" }}>{formattedDate}</p>
              <p style={{ textAlign: "left" }}>To Whom It May Concern</p>
              <p style={{ textAlign: "justify", paddingTop: "10px" }}>
                This is to certify that{" "}
                Mr./Ms. <strong>Rafael B. Garces, 28 years old, Male</strong> was seen
                and examined on <strong>{formattedDate}</strong> with the
                following diagnosis:
              </p>
              <p style={{ textAlign: "justify", paddingTop: "10px" }}>
                This certificate is being issued upon the request of the
                above-mentioned name for whatever urpose it may serve them best,
                excluding legal matters.
              </p>
            </Box>

            <Box
              position={"relative"}
              sx={{ marginTop: "auto", width: "100%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"left"}
              alignItems={"left"}
            >
              <Box
                position={"relative"}
                sx={{ marginTop: "auto", width: "50%" }}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"left"}
                alignItems={"left"}
              >
                <img
                  src={docJin}
                  width={"20%"}
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    top: -100,
                    right: 100,
                  }}
                />

                <Typography
                  sx={{
                    border: "none",
                    fontWeight: "600",
                    textAlign: "center",
                    color: "black",
                    position: "relative",
                  }}
                >
                  Jin Marie B. Garces, M.D.
                </Typography>
                <Typography
                  sx={{
                    border: "none",
                    fontWeight: "600",
                    textAlign: "center",
                    color: "black",
                    position: "relative",
                  }}
                >
                  Lic. No. 0150528
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </>
  );
};

export default MedCert;
