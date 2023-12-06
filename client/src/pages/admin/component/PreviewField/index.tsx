import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";
import { ec_care_test_field } from "../../../../entity/ec_care_test_field";

interface FieldProps {
  fields?: ec_care_test_field;
}

const PreviewField: React.FC<FieldProps> = ({ fields }) => {
  return (
    <Box
      width={"lg"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid container xs={12} md={12}>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            TEST FIELD NAME
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            {fields.test_name?.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            UNIT
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            {fields.unit?.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            MALE REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            {fields.maleRefRange?.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            FEMALE REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            {fields.femaleRefRange?.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            {fields.refRange?.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            DESIRABLE REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            {fields.desirableRefRange?.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            BORDERLINE REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            {fields.borderlineRefRange?.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            HIGH RISKS REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            {fields.highRiskRefRange?.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            OTHERS
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            {fields.other?.toUpperCase()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default PreviewField;
