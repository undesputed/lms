import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Breakpoint, Button, Typography } from "@mui/material";

interface ModalType {
  title?: string;
  open?: boolean;
  handleClose?: () => void;
  handleCancel?: () => void;
  handleSubmit?: () => void;
  children: any;
  showButton: boolean;
  maxWidth?: Breakpoint;
}

const ModalComponent: React.FC<ModalType> = ({
  title,
  open,
  handleClose,
  handleCancel,
  handleSubmit,
  children,
  showButton,
  maxWidth,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={maxWidth ? maxWidth : "md"}
    >
      <DialogTitle
        id="alert-dialog-title"
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        <Typography variant="h3">{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      {showButton ? (
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      ) : null}
    </Dialog>
  );
};

export default ModalComponent;
