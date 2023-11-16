import { Breakpoint } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
export interface DialogBoxProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  content?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  children?: React.ReactNode;
  id?: string;
  maxWidth?: false | Breakpoint;
  fullWidth?: boolean;
}
