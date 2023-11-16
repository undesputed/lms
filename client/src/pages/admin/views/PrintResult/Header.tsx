import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
} from "@mui/material";
import React from "react";
import logo from "../../../../assets/image/logo/Logo.png";

const Header = () => {
  return (
    <TableContainer
      sx={{
        borderBottom: "1px solid grey",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: "none", py: "0", my: "0" }}></TableCell>
            <TableCell sx={{ border: "none", py: "0", my: "0" }}></TableCell>
            <TableCell sx={{ border: "none", py: "0", my: "0" }}></TableCell>
            <TableCell sx={{ border: "none", py: "0", my: "0" }}></TableCell>
            <TableCell sx={{ border: "none", py: "0", my: "0" }}></TableCell>
            <TableCell sx={{ border: "none", py: "0", my: "0" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              rowSpan={4}
              colSpan={2}
              width={200}
              sx={{
                position: "relative",
                backgroundImage: `url(${logo})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
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
                  fontWeight: "bolder",
                  color: "#1580c3",
                  fontSize: "20px",
                }}
              >
                EC CARE MEDICAL LABORATORY
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={4}
              sx={{ border: "none", py: "0", my: "0" }}
              height={"20px"}
            >
              241 Ouano Ext., Ibabao Estancia, Mandaue City, Cebu, 6014{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={4}
              sx={{ border: "none", py: "0", my: "0" }}
              height={"20px"}
            >
              Contact No: 254 9527 / 09270796274 / 09202629412{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={4}
              sx={{ border: "none", py: "0", my: "0" }}
              height={"20px"}
            >
              Email Add: eccaremedical@gmail.com{" "}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Header;
