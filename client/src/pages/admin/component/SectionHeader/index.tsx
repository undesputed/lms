import { Box, Paper, Typography } from "@mui/material";
import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <Box>
      <Box>
        <Typography component="h1" variant="h3" align="justify">
          {title}
        </Typography>
      </Box>
      <Box>
        <hr style={{ height: "3px", backgroundColor: "#1580c3" }} />
        <hr
          style={{
            height: "15px",
            backgroundColor: "#1580c3",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>
    </Box>
  );
};

export default SectionHeader;
