import * as React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  DialogProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DialogBoxProps } from "./DialogBoxProps";
import DialogBoxComponent from "./Dialog";
import TitleDialog from "./DialogTitle";

const DialogBox: React.FC<DialogBoxProps> = ({
  open,
  onClose,
  title,
  content,
  confirmText,
  cancelText,
  onConfirm,
  children,
  fullWidth,
  maxWidth,
  ...others
}) => {
  const [max, setMax] = React.useState<DialogProps["maxWidth"]>("sm");
  return (
    <DialogBoxComponent
      open={open}
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      fullWidth={fullWidth}
      maxWidth={maxWidth ? maxWidth : max}
    >
      <TitleDialog id="customized-dialog-title" onClose={onClose}>
        {title}
      </TitleDialog>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {cancelText}
        </Button>
        <Button onClick={onConfirm} color="primary">
          {confirmText}
        </Button>
      </DialogActions>
    </DialogBoxComponent>
  );
};

export default DialogBox;
