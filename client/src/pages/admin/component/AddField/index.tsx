import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";
import { ec_care_test_field } from "../../../../entity/ec_care_test_field";

interface FieldProps {
  fields?: ec_care_test_field;
  onChange?: (event: any) => void;
}

const TestFieldComponent: React.FC<FieldProps> = ({ fields, onChange }) => {
  return (
    <Box
      width={"lg"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <Grid container xs={12} md={12}>
        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
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
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={"test_name"}
            required
            fullWidth
            id={"test_name"}
            placeholder={"Test Name"}
            value={fields?.test_name}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            UNIT
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={"unit"}
            required
            fullWidth
            id={"unit"}
            placeholder={"Unit"}
            value={fields?.unit}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            MALE REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={"maleRefRange"}
            required
            fullWidth
            id={"maleRefRange"}
            placeholder={"Male Ref. Range"}
            value={fields?.maleRefRange}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            FEMALE REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={"femaleRefRange"}
            required
            fullWidth
            id={"femaleRefRange"}
            placeholder={"Female Reference Range"}
            value={fields?.femaleRefRange}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={"refRange"}
            required
            fullWidth
            id={"refRange"}
            placeholder={"Ref. Range"}
            value={fields?.refRange}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            DESIRABLE REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={"desirableRefRange"}
            required
            fullWidth
            id={"desirableRefRange"}
            placeholder={"Desirable Ref. Range"}
            value={fields?.desirableRefRange}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            BORDERLINE REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={"borderlineRefRange"}
            required
            fullWidth
            id={"borderlineRefRange"}
            placeholder={"Borderline Ref. Range"}
            value={fields?.borderlineRefRange}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            HIGH RISKS REFERENCE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={"highRiskRefRange"}
            required
            fullWidth
            id={"highRiskRefRange"}
            placeholder={"High Risks Ref. Range"}
            value={fields?.highRiskRefRange}
            onChange={onChange}
          />
        </Grid>

        <Grid item xs={12} my={1} md={4} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h3"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            OTHERS
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={2} display={"flex"} alignItems={"center"}>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            :
          </Typography>
        </Grid>
        <Grid item xs={12} my={1} md={6} display={"flex"} alignItems={"center"}>
          <TextField
            name={"other"}
            required
            fullWidth
            id={"other"}
            placeholder={"Others"}
            value={fields?.other}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default TestFieldComponent;
