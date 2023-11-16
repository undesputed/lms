import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import FooterResult from "./FooterResult";
import Header from "./Header";
import CBCPrint from "./CBC";

const TablePreview = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Helmet>
        <title>Print Result</title>
      </Helmet>
      <Paper
        sx={{
          p: { xs: 2, md: 3 },
        }}
      >
        <Header />
        <CBCPrint />
        <FooterResult />
      </Paper>
    </Box>
  );
};

export default TablePreview;
