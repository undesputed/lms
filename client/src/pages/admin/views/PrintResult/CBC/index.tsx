import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";

const CBCPrint = () => {
  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableBody>
          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              Name:
            </TableCell>
            <TableCell sx={{ border: "none" }} colSpan={2}>
              ESPINOSA, CARMELITA
            </TableCell>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              DATE:
            </TableCell>
            <TableCell sx={{ border: "none" }}>10/25/2023</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              Age / Sex:
            </TableCell>
            <TableCell sx={{ border: "none" }} colSpan={2}>
              35/ FEMALE
            </TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              Birth date:
            </TableCell>
            <TableCell sx={{ border: "none" }} colSpan={2}>
              03/10/1988
            </TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={6}
              align="center"
              sx={{
                borderTop: "1px solid grey",
                borderBottom: "1px solid grey",
              }}
            >
              HEMATOLOGY RESULT
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              TEST
            </TableCell>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              RESULT
            </TableCell>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              UNIT
            </TableCell>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}></TableCell>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              REF. RANGE
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "none",
                fontWeight: "bold",
              }}
              colSpan={5}
            >
              BLOOD COUNT
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              WBC
            </TableCell>
            <TableCell sx={{ border: "none" }}>9.11</TableCell>
            <TableCell sx={{ border: "none" }}>x 10^9/L</TableCell>
            <TableCell sx={{ border: "none" }}>Male</TableCell>
            <TableCell sx={{ border: "none" }}>4-10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>Female</TableCell>
            <TableCell sx={{ border: "none" }}>4-11</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              RBC
            </TableCell>
            <TableCell sx={{ border: "none" }}>3.76</TableCell>
            <TableCell sx={{ border: "none" }}>x 10^12/L</TableCell>
            <TableCell sx={{ border: "none" }}>Male</TableCell>
            <TableCell sx={{ border: "none" }}>4.00-5.50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>Female</TableCell>
            <TableCell sx={{ border: "none" }}>3.50-5.00</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              HGB
            </TableCell>
            <TableCell sx={{ border: "none" }}>107</TableCell>
            <TableCell sx={{ border: "none" }}>x 10^9/L</TableCell>
            <TableCell sx={{ border: "none" }}>Male</TableCell>
            <TableCell sx={{ border: "none" }}>120-160</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>Female</TableCell>
            <TableCell sx={{ border: "none" }}>110-150</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              HCT
            </TableCell>
            <TableCell sx={{ border: "none" }}>34</TableCell>
            <TableCell sx={{ border: "none" }}>x 10^9/L</TableCell>
            <TableCell sx={{ border: "none" }}>Male</TableCell>
            <TableCell sx={{ border: "none" }}>40-54</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>Female</TableCell>
            <TableCell sx={{ border: "none" }}>37-47</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              PLT
            </TableCell>
            <TableCell sx={{ border: "none" }}>404</TableCell>
            <TableCell sx={{ border: "none" }}>x 10^9/L</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>100-300</TableCell>
          </TableRow>

          <TableRow>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }} colSpan={5}>
              DIFFERENTIAL COUNT
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              NEU%
            </TableCell>
            <TableCell sx={{ border: "none" }}>63</TableCell>
            <TableCell sx={{ border: "none" }}>%</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>50-70</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              LYM%
            </TableCell>
            <TableCell sx={{ border: "none" }}>20</TableCell>
            <TableCell sx={{ border: "none" }}>%</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>20-40</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              MON%
            </TableCell>
            <TableCell sx={{ border: "none" }}>16</TableCell>
            <TableCell sx={{ border: "none" }}>%</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>10-15</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              EOS%
            </TableCell>
            <TableCell sx={{ border: "none" }}>0</TableCell>
            <TableCell sx={{ border: "none" }}>%</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>1-5</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              BAS%
            </TableCell>
            <TableCell sx={{ border: "none" }}>0</TableCell>
            <TableCell sx={{ border: "none" }}>%</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>0-1</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              TOTAL
            </TableCell>
            <TableCell sx={{ border: "none" }}>100</TableCell>
            <TableCell sx={{ border: "none" }}>%</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }} colSpan={5}>
              RBC PARAMETERS
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              MCV
            </TableCell>
            <TableCell sx={{ border: "none" }}>88.3</TableCell>
            <TableCell sx={{ border: "none" }}>fL</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>80-100</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              MCH
            </TableCell>
            <TableCell sx={{ border: "none" }}>28.6</TableCell>
            <TableCell sx={{ border: "none" }}>PG</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>27-32</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              MCHC
            </TableCell>
            <TableCell sx={{ border: "none" }}>324.0</TableCell>
            <TableCell sx={{ border: "none" }}>g/L</TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>320-360</TableCell>
          </TableRow>

          <TableRow>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              REMARKS
            </TableCell>
            <TableCell sx={{ border: "none" }}>N/A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ border: "none", fontWeight: "bold" }}>
              Others
            </TableCell>
            <TableCell sx={{ border: "none" }}>N/A</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CBCPrint;
