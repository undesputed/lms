import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  GridRowId,
} from "@mui/x-data-grid";
import React from "react";
import { ec_care_test_field } from "../../../../entity/ec_care_test_field";

const columns: GridColDef[] = [
  {
    field: "test_name",
    headerName: "Test name",
    width: 200,
    editable: true,
  },
  {
    field: "unit",
    headerName: "Unit",
    width: 100,
    editable: true,
  },
  {
    field: "maleRefRange",
    headerName: "Male Ref. Range",
    type: "number",
    width: 110,
    align: "center",
    headerAlign: "center",
    editable: true,
  },
  {
    field: "femaleRefRange",
    headerName: "Female Ref. Range",
    width: 110,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "refRange",
    headerName: "Ref. Range",
    width: 110,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "orderNum",
    headerName: "Order Number",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

interface EditTestProps {
  testField: ec_care_test_field[];
  test_category_id?: GridRowId | number | string;
}
const ChangeOrder: React.FC<EditTestProps> = ({
  testField,
  test_category_id,
}) => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box
        width={"lg"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container xs={12} md={12}>
          {testField &&
            testField.map((d: any) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    my={1}
                    md={6}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Typography
                      variant="h3"
                      display="block"
                      gutterBottom
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      {d.test_name.toUpperCase()}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    my={1}
                    md={2}
                    display={"flex"}
                    alignItems={"center"}
                  >
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
                  <Grid
                    item
                    xs={12}
                    my={1}
                    md={4}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <TextField
                      name={"orderNum"}
                      required
                      fullWidth
                      id={"test_name"}
                      type={"number"}
                      placeholder={"Test Name"}
                      defaultValue={d?.orderNum}
                      //   onChange={onChange}
                    />
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Box>
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
            variant="contained"
            sx={{ backgroundColor: "#3695D1", mx: 1 }}
          >
            Submit
          </Button>
        </Box>
        <Box>
          <Button
            size="medium"
            variant="contained"
            sx={{ backgroundColor: "#3695D1", mx: 1 }}
          >
            Close
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChangeOrder;
