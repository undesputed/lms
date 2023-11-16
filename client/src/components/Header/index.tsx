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
import logo from "../../assets/image/logo/Logo White-01.png";
import "../../assets/scss/Header/header.scss";

const HeaderComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          style={{ width: 70, height: 70, marginRight: 10 }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 3 }}
          className="logo-label"
        >
          EC Care Medical Laboratory
        </Typography>
        {isMobile ? (
          <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <div>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Contact Us</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">FAQs</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
