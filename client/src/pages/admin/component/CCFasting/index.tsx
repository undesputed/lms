import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FieldComponent from "../Field";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";

interface CCFastingProps {
  onChange?: (event: any) => void;
  onClose?: () => void;
  testResult: ec_care_testResult;
  onSubmit?: () => void;
}

const CCFasting: React.FC<CCFastingProps> = ({
  onChange,
  onClose,
  testResult,
  onSubmit,
}) => {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" gutterBottom>
            FASTING PROFILE
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Cholesterol"
            textFieldName="cholesterol"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Triglycerides"
            textFieldName="triglycerides"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="HDL Cholesterol"
            textFieldName="hdlCholesterol"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="LDL Cholesterol"
            textFieldName="ldlCholesterol"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Fasting Blood Sugar (Glucose)"
            textFieldName="glucose"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box sx={{ textAlign: "center" }} mt={2}>
            <Button
              size="medium"
              variant="outlined"
              sx={{ color: "#3695D1", mx: 1 }}
              onClick={onSubmit}
            >
              Submit
            </Button>
            <Button
              size="medium"
              variant="contained"
              sx={{ backgroundColor: "#3695D1", mx: 1 }}
              onClick={onClose}
            >
              Close
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CCFasting;
