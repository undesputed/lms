import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarProps } from "./SnackbarProps";

const SnackBarComponent: React.FC<SnackbarProps> = ({
  open,
  transitionDuration,
  children,
  action,
  autoHideDuration,
  onClose,
  message,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      transitionDuration={transitionDuration}
      message={message}
    >
      {children}
    </Snackbar>
  );
};

export default SnackBarComponent;
