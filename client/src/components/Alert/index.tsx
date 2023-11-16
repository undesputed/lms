import * as React from "react";
import Alert from "@mui/material/Alert";
import { AlertProps } from "./AlertProps";
import { AlertTitle } from "@mui/material";

const AlertComponent: React.FC<AlertProps> = ({
  action,
  children,
  severity,
  icon,
  role,
  onClose,
  variant,
  title,
  iconMapping,
}) => {
  return (
    <>
      <Alert
        severity={severity}
        action={action}
        icon={icon}
        variant={variant}
        iconMapping={iconMapping}
        onClose={onClose}
      >
        <AlertTitle>{title}</AlertTitle>
        {children}
      </Alert>
    </>
  );
};

export default AlertComponent;
