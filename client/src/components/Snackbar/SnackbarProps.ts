import { Theme } from "@emotion/react";
import {
  SnackbarContentProps,
  SnackbarOrigin,
  SnackbarClasses,
  ClickAwayListenerProps,
  SnackbarCloseReason,
  SxProps,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

export interface SnackbarProps {
  action?: SnackbarContentProps["action"];
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number | null;
  children?: React.ReactElement<any, any>;
  classes?: Partial<SnackbarClasses>;
  ClickAwayListenerProps?: Partial<ClickAwayListenerProps>;
  ContentProps?: Partial<SnackbarContentProps>;
  disableWindowBlurListener?: boolean;
  key?: any;
  message?: SnackbarContentProps["message"];
  onClose?: (
    event: React.SyntheticEvent<any> | Event,
    reason: SnackbarCloseReason
  ) => void;
  open?: boolean;
  resumeHideDuration?: number;
  sx?: SxProps<Theme>;
  TransitionComponent?: React.JSXElementConstructor<
    TransitionProps & { children: React.ReactElement<any, any> }
  >;
  transitionDuration?: TransitionProps["timeout"];
  TransitionProps?: TransitionProps;
}
