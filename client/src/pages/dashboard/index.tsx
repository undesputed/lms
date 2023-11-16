import React, { useState } from "react";
import DialogBox from "../../components/DialogBox";
import {
  Container,
  Alert,
  Typography,
  Button,
  IconButton,
  Snackbar,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import AlertComponent from "../../components/Alert";
import CloseIcon from "@mui/icons-material/Close";
import SnackBarComponent from "../../components/Snackbar";
import StickyHeadTable from "../../components/Table";

const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <StickyHeadTable />
      </Container>
    </>
  );
};

export default Dashboard;
