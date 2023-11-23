import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";

interface TestFieldProps {
  id?: number;
  title?: string;
  handleUnitChange?: (event: any, id: number) => void;
  handleMaleRefChange?: (event: any, id: number) => void;
  handleFemaleRefChange?: (event: any, id: number) => void;
  handleRefRangeChange?: (event: any, id: number) => void;
  handleDesirableRefChange?: (event: any, id: number) => void;
  handleBorderlineChange?: (event: any, id: number) => void;
  handleHighRiskChange?: (event: any, id: number) => void;
  handleOtherChange?: (event: any, id: number) => void;
}

const TestFieldComponent: React.FC<TestFieldProps> = ({
  id,
  title,
  handleUnitChange,
  handleMaleRefChange,
  handleFemaleRefChange,
  handleRefRangeChange,
  handleDesirableRefChange,
  handleBorderlineChange,
  handleHighRiskChange,
  handleOtherChange,
}) => {
  return (
    <>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{ ml: 5 }}>
            <Box
              width={"lg"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Grid container xs={12} md={12}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h3"
                    display="block"
                    gutterBottom
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "16px",
                    }}
                  >
                    Unit
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  display={"flex"}
                  alignItems={"center"}
                >
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
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TextField
                    name={"unit"}
                    required
                    fullWidth
                    id={"unit"}
                    placeholder={"Unit"}
                    onChange={(e: any) => handleUnitChange(e, id)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ ml: 5 }}>
            <Box
              width={"lg"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Grid container xs={12} md={12}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h3"
                    display="block"
                    gutterBottom
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "16px",
                    }}
                  >
                    Male Ref. Range
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  display={"flex"}
                  alignItems={"center"}
                >
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
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TextField
                    name={"maleRefRange"}
                    required
                    fullWidth
                    id={"maleRefRange"}
                    placeholder={"Male Ref Range"}
                    onChange={(e: any) => handleMaleRefChange(e, id)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ ml: 5 }}>
            <Box
              width={"lg"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Grid container xs={12} md={12}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h3"
                    display="block"
                    gutterBottom
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "16px",
                    }}
                  >
                    Female Ref. Range
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  display={"flex"}
                  alignItems={"center"}
                >
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
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TextField
                    name={"femaleRefRange"}
                    required
                    fullWidth
                    id={"femaleRefRange"}
                    placeholder={"Female Ref. Range"}
                    onChange={(e: any) => handleFemaleRefChange(e, id)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ ml: 5 }}>
            <Box
              width={"lg"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Grid container xs={12} md={12}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h3"
                    display="block"
                    gutterBottom
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "16px",
                    }}
                  >
                    Ref. Range
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  display={"flex"}
                  alignItems={"center"}
                >
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
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TextField
                    name={"refRange"}
                    required
                    fullWidth
                    id={"refRange"}
                    placeholder={"Ref. Range"}
                    onChange={(e: any) => handleRefRangeChange(e, id)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ ml: 5 }}>
            <Box
              width={"lg"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Grid container xs={12} md={12}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h3"
                    display="block"
                    gutterBottom
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "16px",
                    }}
                  >
                    Desirable Ref. Range
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  display={"flex"}
                  alignItems={"center"}
                >
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
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TextField
                    name={"desirableRefRange"}
                    required
                    fullWidth
                    id={"desirableRefRange"}
                    placeholder={"Desirable Ref. Range"}
                    onChange={(e: any) => handleDesirableRefChange(e, id)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ ml: 5 }}>
            <Box
              width={"lg"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Grid container xs={12} md={12}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h3"
                    display="block"
                    gutterBottom
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "16px",
                    }}
                  >
                    Borderline Ref. Range
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  display={"flex"}
                  alignItems={"center"}
                >
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
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TextField
                    name={"borderlineRefRange"}
                    required
                    fullWidth
                    id={"borderlineRefRange"}
                    placeholder={"Borderline Ref. Range"}
                    onChange={(e: any) => handleBorderlineChange(e, id)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ ml: 5 }}>
            <Box
              width={"lg"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Grid container xs={12} md={12}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h3"
                    display="block"
                    gutterBottom
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "16px",
                    }}
                  >
                    High Risk Ref. Range
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  display={"flex"}
                  alignItems={"center"}
                >
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
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TextField
                    name={"highRiskRefRange"}
                    required
                    fullWidth
                    id={"highRiskRefRange"}
                    placeholder={"High Risk Ref. Range"}
                    onChange={(e: any) => handleHighRiskChange(e, id)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ ml: 5 }}>
            <Box
              width={"lg"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Grid container xs={12} md={12}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h3"
                    display="block"
                    gutterBottom
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "16px",
                    }}
                  >
                    Other
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  display={"flex"}
                  alignItems={"center"}
                >
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
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TextField
                    name={"other"}
                    required
                    fullWidth
                    id={"other"}
                    placeholder={"Other"}
                    onChange={(e: any) => handleOtherChange(e, id)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TestFieldComponent;
