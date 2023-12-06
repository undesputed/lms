import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/image/logo/Logo White-01.png";
import "../../../assets/scss/Header/header.scss";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onNavigateTest = () => {
    navigate("/admin/dashboard/test");
  }

  const onNavigateHome = () => {
    navigate("/admin/dashboard/");
  }
  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#3695D1", color: "#fff", height: "80px" }}
      className="AppBar-section"
    >
      <Toolbar sx={{ mt: 3, mb: 3, mx: 10 }} className="toolBar-section">
        <img
          src={logo}
          alt="Logo"
          style={{ width: 70, height: 70, marginRight: 10, cursor: "pointer" }}
          onClick={onNavigateHome}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 3, cursor: "pointer" }}
          className="logo-label"
          onClick={onNavigateHome}
        >
          EC Care Medical Laboratory
        </Typography>
        {isMobile ? (
          <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <div>
            <Button color="inherit" onClick={onNavigateTest}>MANAGE TESTS</Button>
            <Button color="inherit" disabled>Contact Us</Button>
            <Button color="inherit" disabled>Services</Button>
            <Button color="inherit" disabled>FAQs</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
