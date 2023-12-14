import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import TestList from "../../component/TestList";
import SectionHeader from "../../component/SectionHeader";
import { useAppSelector } from "../../../../actions/hooks";
import { RootState } from "../../../../app/store";
import { selectAllReferrals } from "../../../../reducers/referral/referralSlice";
import { selectAllHmo } from "../../../../reducers/hmo/hmoSlice";
import { ec_care_patient } from "../../../../entity/ec_care_patient";
import { ec_care_test_category } from "../../../../entity/ec_care_test_category";

interface AddPatientProps {
  onChange: (event: any) => void;
  onPreview: () => void;
  onClear: () => void;
  patient: ec_care_patient;
  testCategory: ec_care_test_category[];
  onChecked: (selection: any) => void;
  onRemoveChecked: (selection: any) => void;
  onAddTest: () => void;
  onRemoveTest: () => void;
  addedTest: ec_care_test_category[];
  age: number;
}

const AddPatient: React.FC<AddPatientProps> = ({
  onChange,
  onPreview,
  onClear,
  patient,
  testCategory,
  onChecked,
  onRemoveChecked,
  onAddTest,
  onRemoveTest,
  addedTest,
  age,
}) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const referrals = useAppSelector((state: RootState) =>
    selectAllReferrals(state)
  );
  const hmoList = useAppSelector((state: RootState) => selectAllHmo(state));

  return (
    <>
      <Paper sx={{ p: { xs: 2, md: 3 } }}>
        <SectionHeader title="PATIENT REGISTRATION FORM" />
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="fullName"
                required
                fullWidth
                id="fullName"
                helperText="Full Name"
                placeholder="Full Name"
                value={patient.fullName}
                autoFocus={true}
                onChange={(e: any) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                name="birthdate"
                required
                fullWidth
                id="birthdate"
                helperText="Birth Day"
                placeholder="Birth Day"
                type="date"
                value={patient.birthdate}
                onChange={(e: any) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                name="age"
                required
                fullWidth
                id="age"
                helperText="Age"
                placeholder="Age"
                type="number"
                disabled
                value={age}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="sex"
                  name="sex"
                  value={patient.sex}
                  onChange={(e: any) => onChange(e)}
                >
                  <MenuItem value={0} defaultChecked>
                    Choose A gender
                  </MenuItem>
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                  <Divider />
                  <MenuItem value={3}>Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                type="date"
                id="outlined-select-currency"
                helperText="Date of Visit"
                value={patient.dateOfVisit}
                name="dateOfVisit"
                InputProps={{
                  inputProps: {
                    min: new Date().toISOString().split("T")[0], // set minimum date to today's date
                  },
                }}
                style={{
                  width: "100%",
                }}
                onChange={(e: any) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Dr. Referred By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Doctor"
                  name="lms_referral_id"
                  value={patient.lms_referral_id}
                  onChange={(e: any) => onChange(e)}
                >
                  {referrals.map((doctor, index) => (
                    <MenuItem key={index} value={doctor.id}>
                      Dr. {doctor.surname} {doctor.givenName}{" "}
                      {doctor.middleName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                type="Phone Number"
                placeholder="Phone Number"
                id="outlined-select-currency"
                helperText="Phone Number"
                style={{
                  width: "100%",
                }}
                name="phone"
                value={patient.phone}
                onChange={(e: any) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="Email Address"
                placeholder="Email Address"
                id="outlined-select-currency"
                helperText="Email Address"
                style={{
                  width: "100%",
                }}
                name="email"
                value={patient.email}
                onChange={(e: any) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Affiliated HMO
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="HMO"
                  name="lms_hmo_id"
                  value={patient.lms_hmo_id}
                  onChange={(e) => onChange(e)}
                >
                  {hmoList.map((hmo, index) => (
                    <MenuItem key={index} value={hmo.id}>
                      {hmo.hmo_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                type="text"
                placeholder="Company Name"
                id="outlined-select-currency"
                helperText="Company Name"
                style={{
                  width: "100%",
                }}
                name="company"
                onChange={(e) => onChange(e)}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <TestList
        onChecked={onChecked}
        testCategory={testCategory}
        onAddTest={onAddTest}
        onRemoveTest={onRemoveTest}
        addedTest={addedTest}
        onRemoveChecked={onRemoveChecked}
      />
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3 },
          p: { xs: 2 },
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box>
          <Button
            size="medium"
            variant="outlined"
            sx={{ color: "#3695D1", mx: 1 }}
            onClick={onPreview}
          >
            Preview
          </Button>
          <Button
            size="medium"
            variant="contained"
            sx={{ backgroundColor: "#3695D1", mx: 1 }}
          >
            Clear
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default AddPatient;
