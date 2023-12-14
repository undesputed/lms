import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Box,
  Typography,
  Stack,
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
  const [type, setType] = React.useState<string>("");
  const appDispatch = useAppDispatch();

  React.useEffect(() => {
    async function fetchTestCat() {
      try {
        const response: any = await appDispatch(fetchTestCatById(test_id));
        if (response.type === "testCategory/fetchTextCatById/fulfilled") {
          setType(response.payload?.type);
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

    fetchTestCat();
    fetchResult();
  }, []);

  React.useEffect(() => {
    function setBackgroundColor() {
      if (type === "HEMATOLOGY RESULT") {
        setBackground("#d9d3e9");
      } else if (type === "IMMUNO-SEROLOGY RESULT") {
        setBackground("#D9D3E9");
      } else if (type === "CLINICAL MICROSCOPY RESULT") {
        setBackground("#D0E2F3");
      } else if (type === "CLINICAL CHEMISTRY RESULT") {
        setBackground("#D9EAD3");
      } else if (type === "IMAGING") {
        setBackground("#FFFFFF");
      } else {
        setBackground("#FFF3CC");
      }
    }

    setBackgroundColor();
  }, [type]);

  return (
    <>
      <TableContainer>
        <Table
          aria-label="simple table"
          size="small"
          sx={{
            color: "black",
            overflow: "hidden",
          }}
        >
          <TableBody
            sx={{
              color: "black",
            }}
          >
            <TableRow>
              {test?.type === "IMAGING" ? null : (
                <TableCell
                  colSpan={6}
                  align="center"
                  sx={{
                    border: "1px solid #ccc",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                    backgroundColor: { background },
                  }}
                >
                  {test?.type}
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              {(function () {
                let header: any = [];
                if (
                  test?.name.toUpperCase() === "URINALYSIS" ||
                  test?.name.toUpperCase() === "STOOL EXAM" ||
                  test?.name.toUpperCase() === "CHEST PA(PEDIA/ADULT)"
                ) {
                  header.push();
                } else {
                  header.push(
                    <>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          border: "2px solid #ccc",
                          color: "black",
                        }}
                      >
                        TEST NAME
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          border: "2px solid #ccc",
                          color: "black",
                        }}
                      >
                        RESULT
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          border: "2px solid #ccc",
                          color: "black",
                        }}
                      >
                        UNIT
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          border: "2px solid #ccc",
                          color: "black",
                        }}
                      >
                        REFERENCE RANGE
                      </TableCell>
                    </>
                  );
                }
                return header;
              })()}
            </TableRow>
            {(function () {
              let content = [];

              if (test?.name.toUpperCase() === "URINALYSIS") {
                content.push(
                  <>
                    <Grid container sx={{ border: "2px solid #ccc" }}>
                      <Grid item xs={6} md={6}>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            border: "1px solid #ccc",
                            color: "black",
                            px: 1.5,
                          }}
                        >
                          PHYSICAL AND CHEMICAL ANALYSIS
                        </Typography>
                        {result &&
                          result.map((d, index) => {
                            if (index <= 11) {
                              return (
                                <Grid container>
                                  <Grid item xs={6} md={6}>
                                    <TableCell
                                      align="left"
                                      sx={{ border: "none" }}
                                    >
                                      {d.test_name.toUpperCase()}
                                    </TableCell>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={6}
                                    md={6}
                                    sx={{
                                      border: "none",
                                      fontWeight: "bold",
                                      color: "black",
                                    }}
                                  >
                                    <TableCell
                                      align="center"
                                      sx={{
                                        border: "none",
                                        fontWeight: "bold",
                                        color: "black",
                                      }}
                                    >
                                      {d.result}
                                    </TableCell>
                                  </Grid>
                                </Grid>
                              );
                            }
                          })}
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            border: "1px solid #ccc",
                            color: "black",
                            px: 1.5,
                          }}
                        >
                          MICROSCOPIC ANALYSIS
                        </Typography>
                        {result &&
                          result.map((d, index) => {
                            if (index >= 12) {
                              return (
                                <Grid container>
                                  <Grid item xs={4} md={4}>
                                    <TableCell
                                      align="left"
                                      sx={{ border: "none" }}
                                    >
                                      {d.test_name.toUpperCase()}
                                    </TableCell>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={4}
                                    md={4}
                                    sx={{
                                      border: "none",
                                      fontWeight: "bold",
                                      color: "black",
                                    }}
                                  >
                                    <TableCell
                                      align="center"
                                      sx={{
                                        border: "none",
                                        fontWeight: "bold",
                                        color: "black",
                                      }}
                                    >
                                      {d.result}
                                    </TableCell>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={4}
                                    md={4}
                                    sx={{
                                      border: "none",
                                      fontWeight: "bold",
                                      color: "black",
                                    }}
                                  >
                                    <TableCell
                                      align="center"
                                      sx={{ border: "none" }}
                                    >
                                      {d.other}
                                    </TableCell>
                                  </Grid>
                                </Grid>
                              );
                            }
                          })}
                      </Grid>
                    </Grid>
                  </>
                );
                content.push(
                  <TableRow
                    sx={{
                      border: "2px solid #ccc",
                    }}
                  ></TableRow>
                );
              }

              if (test?.name.toUpperCase() === "CBC") {
                content.push(
                  <TableRow>
                    <TableCell
                      align="left"
                      colSpan={4}
                      sx={{
                        fontWeight: "bold",
                        border: "2px solid #ccc",
                        color: "black",
                      }}
                    >
                      BLOOD COUNT
                    </TableCell>
                  </TableRow>
                );

                result &&
                  result.map((d, index) => {
                    if (index === 5) {
                      content.push(
                        <>
                          <TableRow>
                            <TableCell
                              align="left"
                              colSpan={4}
                              sx={{
                                fontWeight: "bold",
                                border: "2px solid #ccc",
                                color: "black",
                              }}
                            >
                              DIFFERENTIAL COUNT
                            </TableCell>
                          </TableRow>
                        </>
                      );
                    }

                    if (index === 11) {
                      content.push(
                        <TableRow>
                          <TableCell
                            align="left"
                            colSpan={4}
                            sx={{
                              fontWeight: "bold",
                              border: "2px solid #ccc",
                              color: "black",
                            }}
                          >
                            RBC PARAMETERS
                          </TableCell>
                        </TableRow>
                      );
                    }
                    content.push(
                      <TableRow
                        sx={{
                          borderRight: "2px solid #ccc",
                          borderLeft: "2px solid #ccc",
                        }}
                      >
                        <TableCell
                          align="left"
                          sx={{ border: "none", color: "black" }}
                        >
                          {d.test_name.toUpperCase()}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "none",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {d.result}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "none",
                            display: "flex",
                            justifyContent: "space-around",
                            color: "black",
                          }}
                        >
                          {d.unit}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ border: "none", color: "black" }}
                        >
                          {d.refRange}
                        </TableCell>
                      </TableRow>
                    );
                  });
                content.push(
                  <TableRow
                    sx={{
                      border: "2px solid #ccc",
                    }}
                  ></TableRow>
                );
              }

              if (test?.name.toUpperCase() === "STOOL EXAM") {
                content.push(
                  <TableRow>
                    <TableCell
                      align="left"
                      colSpan={4}
                      sx={{
                        fontWeight: "bold",
                        border: "2px solid #ccc",
                        color: "black",
                      }}
                    >
                      GROSS EXAM
                    </TableCell>
                  </TableRow>
                );

                result &&
                  result.map((d, index) => {
                    if (index === 2) {
                      content.push(
                        <TableRow>
                          <TableCell
                            align="left"
                            colSpan={4}
                            sx={{
                              fontWeight: "bold",
                              border: "2px solid #ccc",
                              color: "black",
                            }}
                          >
                            MICROSCOPIC ANALYSIS
                          </TableCell>
                        </TableRow>
                      );
                    }
                    content.push(
                      <TableRow
                        sx={{
                          borderRight: "2px solid #ccc",
                          borderLeft: "2px solid #ccc",
                        }}
                      >
                        <TableCell
                          align="left"
                          sx={{ border: "none", color: "black" }}
                        >
                          {d.test_name.toUpperCase()}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "none",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {d.result}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "none",
                            display: "flex",
                            justifyContent: "space-around",
                            color: "black",
                          }}
                        >
                          {test?.name.toUpperCase() === "URINALYSIS" ||
                          test?.name === "STOOL EXAM"
                            ? d.other
                            : d.unit}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ border: "none", color: "black" }}
                        >
                          {test?.name.toUpperCase() === "URINALYSIS" ||
                          test?.name === "STOOL EXAM"
                            ? null
                            : d.refRange}
                        </TableCell>
                      </TableRow>
                    );
                  });

                content.push(
                  <TableRow
                    sx={{
                      border: "2px solid #ccc",
                    }}
                  ></TableRow>
                );
              }

              if (test?.name.toUpperCase() === "CHEST PA(PEDIA/ADULT)") {
                content.push(
                  <>
                    <Box m={5}>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "20px",
                          fontWeight: "bolder",
                        }}
                      >
                        Results:
                      </Typography>
                      <Box display={"flex"} flexDirection={"column"} mt={1}>
                        <Typography>
                          PA view of he chest reveals the lungs are clear.
                        </Typography>
                        <Typography>
                          Pulmonary structure is and shows vascular markings.
                        </Typography>
                        <Typography>
                          The mediastinum is centered and of normal width. The
                        </Typography>
                        <Typography>
                          tracheal air shadow is midline. The cardiac size and
                        </Typography>
                        <Typography>
                          configuration are within normal limits. Both
                        </Typography>
                        <Typography>
                          hemidiaphragms and costophrenic angles are sharp and
                        </Typography>
                        <Typography>
                          intact. The visualized osseous thoracic cage shows no
                          bony abnormality.
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "20px",
                          fontWeight: "bolder",
                        }}
                        mt={5}
                      >
                        IMPRESSION:
                      </Typography>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "20px",
                          textAlign: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        {(function () {
                          const exam: any = [];
                          result &&
                            result.map((d, index) => {
                              if (index === 0) {
                                exam.push(d.result?.toUpperCase());
                              }
                            });
                          return exam;
                        })()}
                      </Typography>
                    </Box>
                  </>
                );
              }

              return content;
            })()}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TestContent;
