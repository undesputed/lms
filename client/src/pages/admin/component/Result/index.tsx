import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "../SectionHeader";
import patient from "../../patient";
import CBC from "../Cbc";
import Urinalysis from "../Urinalysis";
import Stool from "../Stool";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";
import CCFasting from "../CCFasting";
import CTBT from "../CTBT";
import ECG from "../ECG";

interface ModalProps {
  onChange?: (event: any) => void;
  testType: string;
  onClose?: () => void;
  testResult: ec_care_testResult;
  onSubmit?: () => void;
}

const LabResultModal: React.FC<ModalProps> = ({
  testType,
  onClose,
  testResult,
  onChange,
  onSubmit,
}) => {
  switch (testType) {
    case "Abdominal Flat Plate":
      return (
        <Box>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{ width: "100%", borderColor: "#0d7f3f" }}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"left"}
                  justifyContent={"space-between"}
                >
                  <Typography component="h4" variant="h4" paddingX={1}>
                    Test Field
                  </Typography>
                  <TextField
                    name="testFIeld"
                    required
                    fullWidth
                    id="testFIeld"
                    helperText="Full Name"
                    placeholder="Full Name"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      );
    case "CBC":
      return (
        <Box>
          <CBC
            onChange={onChange}
            onClose={onClose}
            testResult={testResult}
            onSubmit={onSubmit}
          />
        </Box>
      );
    case "Urinalysis":
      return (
        <Box>
          <Urinalysis
            onChange={onChange}
            onClose={onClose}
            testResult={testResult}
            onSubmit={onSubmit}
          />
        </Box>
      );
    case "Stool Exam":
      return (
        <Box>
          <Stool
            onChange={onChange}
            onClose={onClose}
            testResult={testResult}
            onSubmit={onSubmit}
          />
        </Box>
      );
    case "FBS (Fasting Blood Sugar)":
      return (
        <Box>
          <CCFasting
            onChange={onChange}
            onClose={onClose}
            testResult={testResult}
            onSubmit={onSubmit}
          />
        </Box>
      );
    case "CTBT":
      return (
        <Box>
          <CTBT
            onChange={onChange}
            onClose={onClose}
            testResult={testResult}
            onSubmit={onSubmit}
          />
        </Box>
      );
    case "ECG":
      return (
        <Box>
          <ECG
            onChange={onChange}
            onClose={onClose}
            testResult={testResult}
            onSubmit={onSubmit}
          />
        </Box>
      );
    default:
      console.log(testType);
      return;
      <>Hello world</>;
  }
};

export default LabResultModal;
