import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { ec_care_patient } from "../../../../entity/ec_care_patient";
import { ec_care_test_category } from "../../../../entity/ec_care_test_category";
import { useAppSelector } from "../../../../actions/hooks";
import { RootState } from "../../../../app/store";
import {
  selectAllReferrals,
  selectReferralById,
} from "../../../../reducers/referral/referralSlice";
import { ec_care_referral } from "../../../../entity/ec_care_referral";

interface PatientProps {
  patient: ec_care_patient;
  tests: ec_care_test_category[];
  age: number;
}

const PreviewPatient: React.FC<PatientProps> = ({ patient, tests, age }) => {
  const docIt: any = patient.lms_referral_id;
  const referral = useAppSelector((state: RootState) =>
    selectReferralById(state, docIt)
  );
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1}>
              Full Name:
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              paddingX={1}
              sx={{ fontWeight: 400, whiteSpace: 5 }}
            >
              {patient.fullName}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1}>
              Birthday:
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              paddingX={1}
              sx={{ fontWeight: 400, whiteSpace: 5 }}
            >
              {(function () {
                let rowList: any = [];
                const dateObject = new Date(patient.birthdate);
                const formattedDate = dateObject.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });
                rowList.push(formattedDate);
                return rowList;
              })()}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1}>
              Age:
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              paddingX={1}
              sx={{ fontWeight: 400, whiteSpace: 5 }}
            >
              {age}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1} align="left">
              Sex:
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              paddingX={1}
              sx={{ fontWeight: 400, whiteSpace: 5 }}
            >
              {(function () {
                let data: any = "";

                if (patient.sex === 1) {
                  data = "Male";
                } else if (patient.sex === 2) {
                  data = "Female";
                } else if (patient.sex === 2) {
                  data = "Others";
                } else {
                  data = "Please Choose a Gender";
                }
                return data;
              })()}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1}>
              Date:
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              paddingX={1}
              sx={{ fontWeight: 400, whiteSpace: 5 }}
            >
              {(function () {
                let rowList: any = [];
                const dateObject = new Date(patient.dateOfVisit);
                const formattedDate = dateObject.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });
                rowList.push(formattedDate);
                return rowList;
              })()}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1}>
              Dr. Referred By:
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              paddingX={1}
              sx={{ fontWeight: 400, whiteSpace: 5 }}
            >
              {(function () {
                return referral
                  ? referral.surname + " " + referral.givenName
                  : "--";
              })()}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1}>
              Phone Number:
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              paddingX={1}
              sx={{ fontWeight: 400, whiteSpace: 5 }}
            >
              {patient.phone}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1}>
              Email Address:
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              paddingX={1}
              sx={{ fontWeight: 400, whiteSpace: 5 }}
            >
              {patient.email}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1}>
              Company:
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              paddingX={1}
              sx={{ fontWeight: 400, whiteSpace: 5 }}
            >
              {patient.company}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{ width: "100%", borderColor: "#0d7f3f" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"left"}
            justifyContent={"space-between"}
          >
            <Typography component="h4" variant="h4" paddingX={1}>
              Lists of Tests:
            </Typography>
            <Box>
              <List dense={false}>
                {tests &&
                  tests.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        display: "flex",
                        textAlign: "right",
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPatient;
