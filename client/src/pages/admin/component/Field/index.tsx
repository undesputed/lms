import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";

interface FieldProps {
  onChange?: (event: any) => void;
  label: string;
  textFieldName: string;
  testResult: ec_care_testResult;
}

const FieldComponent: React.FC<FieldProps> = ({
  onChange,
  label,
  textFieldName,
  testResult,
}) => {
  return (
    <Box
      width={"lg"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <Grid container xs={12} md={12}>
        <Grid item xs={12} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            {label}
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={textFieldName}
            required
            fullWidth
            id={textFieldName}
            placeholder={label}
            value={testResult[textFieldName]}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default FieldComponent;
