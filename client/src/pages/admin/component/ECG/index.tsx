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

interface ECGProps {
  onChange?: (event: any) => void;
  onClose?: () => void;
  testResult: ec_care_testResult;
  onSubmit?: () => void;
}

const ECG: React.FC<ECGProps> = ({
  onChange,
  onClose,
  testResult,
  onSubmit,
}) => {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="POTASSIUM (K+)"
            textFieldName="potassium"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="SODIUM (Na+)	"
            textFieldName="sodium"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="CHLORIDE (Cl)"
            textFieldName="chloride"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="IONIZED CALCIUM (iCa)"
            textFieldName="ionizedCalcium"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="TOTAL CALCIUM"
            textFieldName="totalCalcium"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="REMARKS"
            textFieldName="remarks"
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

export default ECG;
