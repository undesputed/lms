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

interface UrinalysisProps {
  onChange?: (event: any) => void;
  onClose?: () => void;
  testResult: ec_care_testResult;
  onSubmit?: () => void;
}

const Urinalysis: React.FC<UrinalysisProps> = ({
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
            PHYSICAL AND CHEMICAL ANALYSIS
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Color"
            textFieldName="color"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Transparency"
            textFieldName="transparency"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Leukocyte"
            textFieldName="leukocyte"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Nitrite"
            textFieldName="nitrite"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Urobilinogen"
            textFieldName="urobilinogen"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Protein"
            textFieldName="protein"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="PH"
            textFieldName="ph"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Blood"
            textFieldName="blood"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Sp Gravity"
            textFieldName="spGravity"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Ketone"
            textFieldName="ketone"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Bilirubin"
            textFieldName="bilirubin"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Glucose"
            textFieldName="glucose"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" gutterBottom>
            MICROSCOPIC ANALYSIS
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="WBC"
            textFieldName="wbc"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="RBC"
            textFieldName="rbc"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Bacteria"
            textFieldName="bacteria"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Epithelial Cells"
            textFieldName="epithelialCells"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Amorphous Urate"
            textFieldName="amorphousUrate"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Mucus threads"
            textFieldName="mucusThreads"
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
            onChange={onChange}
            testResult={testResult}
            label="Other"
            textFieldName="other"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
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

export default Urinalysis;
