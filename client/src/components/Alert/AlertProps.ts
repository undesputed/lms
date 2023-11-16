import {
  AlertClasses,
  AlertColor,
  AlertPropsColorOverrides,
  AlertPropsVariantOverrides,
  IconButtonProps,
  SvgIconProps,
} from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

export interface AlertProps {
  action?: React.ReactNode;
  classes?: Partial<AlertClasses>;
  closeText?: string;
  color?: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
  components?: {
    CloseButton?: React.ElementType;
    CloseIcon?: React.ElementType;
  };
  componentsProps?: {
    closeButton?: IconButtonProps;
    closeIcon?: SvgIconProps;
  };
  severity?: AlertColor;
  icon?: React.ReactNode;
  role?: string;
  iconMapping?: Partial<Record<AlertColor, React.ReactNode>>;
  onClose?: (event: React.SyntheticEvent) => void;
  variant?: OverridableStringUnion<
    "standard" | "filled" | "outlined",
    AlertPropsVariantOverrides
  >;
  slotProps?: {
    closeButton?: IconButtonProps;
    closeIcon?: SvgIconProps;
  };
  slots?: {
    closeButton?: React.ElementType;
    closeIcon?: React.ElementType;
  };
  children?: React.ReactNode;
  title?: string
}
