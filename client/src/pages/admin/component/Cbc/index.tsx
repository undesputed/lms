import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FieldComponent from "../Field";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";

interface CbcProps {
  onChange?: (event: any) => void;
  onClose?: () => void;
  testResult: ec_care_testResult;
  onSubmit?: () => void;
}

const CBC: React.FC<CbcProps> = ({
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
            Blood Count
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="WBC (White Blood Cells)"
            textFieldName="wbc"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="Red Blood Cells (RBC)"
            textFieldName="rbc"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="HGB"
            textFieldName="hgb"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="HCT"
            textFieldName="hct"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="PLT"
            textFieldName="plt"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" gutterBottom>
            DIFFERENTIAL COUNT
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="NEU (%)"
            textFieldName="neu"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="LYM (%)"
            textFieldName="lym"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="MON (%)"
            textFieldName="mon"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="EOS (%)"
            textFieldName="eos"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="BAS (%)"
            textFieldName="bas"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="TOTAL (%)"
            textFieldName="total"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" gutterBottom>
            RBC PARAMETERS
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="MCV"
            textFieldName="mcv"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="MCH"
            textFieldName="mch"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="MCHC"
            textFieldName="mchc"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" gutterBottom>
            OTHERS
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            testResult={testResult}
            onChange={onChange}
            label="Other"
            textFieldName="other"
          />
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

export default CBC;
