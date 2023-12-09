import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../../../../actions/hooks";
import { fetchTestCatById } from "../../../../../reducers/testCategory/testCategory";
import { ec_care_test_category } from "../../../../../entity/ec_care_test_category";
import { fetchResultByTestField } from "../../../../../reducers/results/resultsSlice";

interface TestContentProps {
  test_id: number | string;
  patient_id: number | string;
}

const TestContent: React.FC<TestContentProps> = ({ test_id, patient_id }) => {
  const [test, setTest] = React.useState<any>();
  const [result, setResult] = React.useState<any>();
  const [background, setBackground] = React.useState<string>("");
  const appDispatch = useAppDispatch();

  React.useEffect(() => {
    async function fetchTestCat() {
      try {
        const response = await appDispatch(fetchTestCatById(test_id));
        if (response.type === "testCategory/fetchTextCatById/fulfilled") {
          setTest(response.payload);
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function fetchResult() {
      try {
        const params = {
          test_id: test_id,
          patient_id: patient_id,
        };
        const response = await appDispatch(fetchResultByTestField(params));
        if (response.type === "results/fetchResultsByTestField/fulfilled") {
          setResult(response.payload);
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function setBackgroundColor() {
      if (test?.type === "HEMATOLOGY RESULT") {
        await setBackground("#d9d3e9");
      } else if (test?.type === "IMMUNO-SEROLOGY RESULT") {
        await setBackground("#D9D3E9");
      } else if (test?.type === "CLINICAL MICROSCOPY RESULT") {
        await setBackground("#D0E2F3");
      } else if (test?.type === "CLINICAL CHEMISTRY RESULT") {
        await setBackground("#D9EAD3");
      } else if (test?.type === "IMAGING") {
        await setBackground("#FFFFFF");
      } else {
        await setBackground("#FFF3CC");
      }
    }

    fetchTestCat();
    fetchResult();
    setBackgroundColor();
  }, []);

  return (
    <>
      <TableContainer>
        <Table aria-label="simple table" size="small">
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={6}
                align="center"
                sx={{
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold",
                  backgroundColor: { background },
                }}
              >
                {test?.type}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
              >
                TEST NAME
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
              >
                RESULT
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
              >
                UNIT
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
              >
                REFERENCE RANGE
              </TableCell>
            </TableRow>
            {(function () {
              let content = [];

              if (test?.name.toUpperCase() === "CBC") {
                content.push(
                  <TableRow>
                    <TableCell
                      align="left"
                      colSpan={4}
                      sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
                    >
                      BLOOD COUNT
                    </TableCell>
                  </TableRow>
                );
              }

              if (test?.name === "STOOL EXAM") {
                content.push(
                  <TableRow>
                    <TableCell
                      align="left"
                      colSpan={4}
                      sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
                    >
                      GROSS EXAM
                    </TableCell>
                  </TableRow>
                );
              }
              result &&
                result.map((d, index) => {
                  if (test?.name.toUpperCase() === "CBC" && index === 5) {
                    content.push(
                      <>
                        <TableRow>
                          <TableCell
                            align="left"
                            colSpan={4}
                            sx={{
                              fontWeight: "bold",
                              border: "1px solid #ccc",
                            }}
                          >
                            DIFFERENTIAL COUNT
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  }

                  if (test?.name === "CBC" && index === 11) {
                    content.push(
                      <TableRow>
                        <TableCell
                          align="left"
                          colSpan={4}
                          sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
                        >
                          RBC PARAMETERS
                        </TableCell>
                      </TableRow>
                    );
                  }

                  if (
                    test?.name.toUpperCase() === "STOOL EXAM" &&
                    index === 2
                  ) {
                    content.push(
                      <TableRow>
                        <TableCell
                          align="left"
                          colSpan={4}
                          sx={{ fontWeight: "bold", border: "1px solid #ccc" }}
                        >
                          MICROSCOPIC ANALYSIS
                        </TableCell>
                      </TableRow>
                    );
                  }

                  if (
                    test?.name === "STOOL EXAM" &&
                    index === 0 &&
                    index === 1
                  ) {
                    if (
                      d.test_name.toUpperCase() === "COLOR" ||
                      d.test_name.toUpperCase() === "CONSISTENCY"
                    ) {
                      content.push(
                        <TableRow
                          sx={{
                            borderRight: "1px solid #ccc",
                            borderLeft: "1px solid #ccc",
                          }}
                        >
                          <TableCell align="left" sx={{ border: "none" }}>
                            {d.test_name.toUpperCase()}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ border: "none", fontWeight: "bold" }}
                          >
                            {d.result}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              border: "none",
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            {d.unit}
                          </TableCell>
                          <TableCell align="center" sx={{ border: "none" }}>
                            {d.refRange}
                          </TableCell>
                        </TableRow>
                      );
                    }
                  }
                  content.push(
                    <TableRow
                      sx={{
                        borderRight: "1px solid #ccc",
                        borderLeft: "1px solid #ccc",
                      }}
                    >
                      <TableCell align="left" sx={{ border: "none" }}>
                        {d.test_name.toUpperCase()}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: "none", fontWeight: "bold" }}
                      >
                        {d.result}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          border: "none",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        {d.unit}
                      </TableCell>
                      <TableCell align="center" sx={{ border: "none" }}>
                        {d.refRange}
                      </TableCell>
                    </TableRow>
                  );
                });

              return content;
            })()}
            <TableRow
              sx={{
                border: "1px solid #ccc",
              }}
            ></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TestContent;
