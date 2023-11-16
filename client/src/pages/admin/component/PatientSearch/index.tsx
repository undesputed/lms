import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";
import React from "react";
import { BiSearchAlt, BiPlusCircle } from "react-icons/bi";

interface SearchFieldProps {
  onChange: (event: any) => void;
}

const PatientSearchField: React.FC<SearchFieldProps> = ({ onChange }) => {
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                mr={2}
                align="center"
                sx={{ fontWeight: "bold" }}
                fontSize={15}
              >
                Patient Name:
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Full Name
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <BiSearchAlt />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Search"
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                mr={2}
                align="center"
                sx={{ fontWeight: "bold" }}
                fontSize={15}
              >
                Ref. No.:
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Reference Number
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <BiSearchAlt />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Search"
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                mr={2}
                align="center"
                sx={{ fontWeight: "bold" }}
                fontSize={15}
              >
                Appointment Date:
              </Typography>
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="date"
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <BiSearchAlt />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Search"
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                align="center"
                sx={{ fontWeight: "bold" }}
                fontSize={15}
              >
                Add Patient
              </Typography>
              <IconButton aria-label="add">
                <BiPlusCircle />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PatientSearchField;
