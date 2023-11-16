import React from "react";
import {
  Paper,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Button,
} from "@mui/material";
import patient from "../../patient";
import SectionHeader from "../SectionHeader";
import { useAppSelector } from "../../../../actions/hooks";
import { RootState } from "../../../../app/store";
import { selectAllHmo } from "../../../../reducers/hmo/hmoSlice";
import { selectAllReferrals } from "../../../../reducers/referral/referralSlice";
import { selectPatientById } from "../../../../reducers/patient/patientSlice";
import { ec_care_patient } from "../../../../entity/ec_care_patient";

interface UpdatePatientProps {
  patient: ec_care_patient;
  onChangeUpdate: (event: any) => void;
  onSubmitUpdate: () => void;
}

const UpdatePatientForm: React.FC<UpdatePatientProps> = ({
  patient,
  onChangeUpdate,
  onSubmitUpdate,
}) => {
  const referrals = useAppSelector((state: RootState) =>
    selectAllReferrals(state)
  );
  const hmoList = useAppSelector((state: RootState) => selectAllHmo(state));

  function calculateAge(dateOfBirth: string | Date | null): number {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  }

  return (
    <>
      <Paper sx={{ p: { xs: 2, md: 3 } }}>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                name="fullName"
                required
                fullWidth
                id="fullName"
                helperText="Full Name"
                placeholder="Full Name"
                autoFocus={true}
                value={patient.fullName}
                onChange={(e) => onChangeUpdate(e)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                name="birthdate"
                required
                fullWidth
                id="birthdate"
                helperText="Birth Day"
                placeholder="Birth Day"
                type="date"
                value={new Date(patient.birthdate).toISOString().split("T")[0]}
                onChange={(e) => onChangeUpdate(e)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                name="age"
                required
                fullWidth
                id="age"
                helperText="Age"
                placeholder="Age"
                type="number"
                disabled
                value={calculateAge(patient.birthdate)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="sex"
                  name="sex"
                  value={patient.sex}
                  onChange={(e: any) => onChangeUpdate(e)}
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
            <Grid item xs={12} sm={12}>
              <TextField
                type="date"
                id="outlined-select-currency"
                helperText="Date of Visit"
                InputProps={{
                  inputProps: {
                    min: new Date().toISOString().split("T")[0], // set minimum date to today's date
                  },
                }}
                style={{
                  width: "100%",
                }}
                disabled
                value={
                  new Date(patient.dateOfVisit).toISOString().split("T")[0]
                }
              />
            </Grid>
            <Grid item xs={12} md={12}>
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
                  onChange={(e: any) => onChangeUpdate(e)}
                >
                  <MenuItem value={null}>N/A</MenuItem>
                  {referrals.map((doctor, index) => (
                    <MenuItem key={index} value={doctor.id}>
                      Dr. {doctor.surname} {doctor.givenName}{" "}
                      {doctor.middleName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
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
                onChange={(e: any) => onChangeUpdate(e)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
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
                onChange={(e: any) => onChangeUpdate(e)}
                />
            </Grid>
            <Grid item xs={12} md={12}>
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
                  onChange={(e: any) => onChangeUpdate(e)}
                >
                  <MenuItem value={null}>N/A</MenuItem>
                  {hmoList.map((hmo, index) => (
                    <MenuItem key={index} value={hmo.id}>
                      {hmo.hmo_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                type="text"
                placeholder="Company Name"
                id="outlined-select-currency"
                helperText="Company Name"
                style={{
                  width: "100%",
                }}
                name="companyName"
                disabled
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3 },
          p: { xs: 2 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <Button
            size="medium"
            variant="outlined"
            sx={{ color: "#3695D1", mx: 1 }}
            onClick={onSubmitUpdate}
          >
            Update
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

export default UpdatePatientForm;
