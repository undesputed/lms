import React from "react";
import { useAppSelector } from "../../../../actions/hooks";
import { RootState } from "../../../../app/store";
import { selectTestCategoryById } from "../../../../reducers/testCategory/testCategory";
import { GridRowId } from "@mui/x-data-grid";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { testResult } from "../../../../api/testResultAPI";
import { ec_care_test_field_category_field } from "../../../../entity/ec_care_test_field_category_field";

interface PreviewProps {
  test_category_id?: GridRowId;
  test_category_field: any[];
  onClose?: () => void;
}

const Preview: React.FC<PreviewProps> = ({
  test_category_id,
  test_category_field,
  onClose,
}) => {
  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">TEST NAME</TableCell>
              <TableCell align="left">UNIT</TableCell>
              <TableCell align="center">MALE REF. RANGE</TableCell>
              <TableCell align="center">FEMALE REF. RANGE</TableCell>
              <TableCell align="center">REF. RANGE</TableCell>
              <TableCell align="center">DESIRABLE REF. RANGE</TableCell>
              <TableCell align="center">BORDERLINE REF. RANGE</TableCell>
              <TableCell align="center">HIGH RISK REF. RANGE</TableCell>
              <TableCell align="center">OTHERS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {test_category_field &&
              test_category_field.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="right" sx={{ fontWeight: "bolder" }}>
                    {item.test_name.toUpperCase()}
                  </TableCell>
                  <TableCell align="left" sx={{ fontWeight: "bolder" }}>
                    {item.unit}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {item.maleRefRange}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {item.femaleRefRange}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {item.refRange}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {item.desirableRefRange}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {item.borderlineRefRange}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {item.highRiskRefRange}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {item.other}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
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
            onClick={onClose}
          >
            Close
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Preview;
