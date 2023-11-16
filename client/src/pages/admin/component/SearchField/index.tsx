import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

interface SearchFieldProps {
  onChange: (event: any) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onChange }) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={2}
      >
        <Typography
          mr={2}
          align="center"
          sx={{ fontWeight: "bolder" }}
          fontSize={16}
        >
          Search:
        </Typography>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <BiSearchAlt />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
      </Box>
    </>
  );
};

export default SearchField;
