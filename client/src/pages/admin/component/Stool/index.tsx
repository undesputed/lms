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
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";
import FieldComponent from "../Field";

interface StoolProps {
  onChange?: (event: any) => void;
  onClose?: () => void;
  testResult: ec_care_testResult;
  onSubmit?: () => void;
}

const Stool: React.FC<StoolProps> = ({
  onChange,
  onClose,
  testResult,
  onSubmit,
}) => {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h3">GROSS EXAM</Typography>
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
            label="Consistency"
            textFieldName="consistency"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h3">MICROSCOPIC ANALYSIS</Typography>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
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
            label="Fat Globules"
            textFieldName="fatGlobules"
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
            label="Others"
            textFieldName="others"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Ascaris L."
            textFieldName="ascarisL"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Trichuris trichuria"
            textFieldName="trichurisTrichuria"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Hookworm"
            textFieldName="hookworm"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Schistosoma"
            textFieldName="schistosoma"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Entamoeba histolytica: Troph.	"
            textFieldName="entamoebaHistolyticaTroph"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Entamoeba histolytica: Cyst	"
            textFieldName="entamoebaHistolyticaCyst"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Entamoeba Coli	"
            textFieldName="entamoebaColi"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldComponent
            onChange={onChange}
            testResult={testResult}
            label="Remarks"
            textFieldName="remarks"
          />
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

export default Stool;
