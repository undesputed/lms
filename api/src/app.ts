import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { patient } from "./routes/patient/patient";
import { createPatient } from "./routes/patient/createPatient";
import { NotFoundError } from "./errors/notFoundError";
import { ErrorHandler } from "./middleware/errorHandler";
import { testCategory } from "./routes/testCategory/testCategory";
import { referral } from "./routes/referral/referral";
import { hmo } from "./routes/hmo/hmo";
import { createTests } from "./routes/tests/createTest";
import { createTestResult } from "./routes/testResult/createTestResult";
import { updateTestResult } from "./routes/testResult/updateTestResult";
import { testResult } from "./routes/testResult/testResult";
import { updatePatient } from "./routes/patient/updatePatient";
import { deleteTestResult } from "./routes/testResult/deleteTestResult";
import { testField } from "./routes/testField/testField";
import { testCategoryField } from "./routes/testFieldCategory/testFieldCategory";
import { createPatientResult } from "./routes/patientResult/createPatientResult";
import { createTestFieldCategory } from "./routes/testFieldCategory/createTestFieldCategory";
import { createTestCategory } from "./routes/testCategory/createTestCategory";
import { deleteTest } from "./routes/tests/deleteTest";
import { deleteTestCategory } from "./routes/testCategory/deleteTestCategory";
import { createResults } from "./routes/results/createResults";
import { results } from "./routes/results/results";
import { test } from "./routes/tests/test";
import { updateResults } from "./routes/results/updateResults";
import { deleteResults } from "./routes/results/deleteResults";
import { createTestField } from "./routes/testField/createTestFIeld";
import { deleteTestField } from "./routes/testField/deleteTestField";
import { updateTestField } from "./routes/testField/updateTestField";
import { deletePatient } from "./routes/patient/deletePatient";
import { medcert } from "./routes/medCert/medCert";

const app = express();
var corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://13.229.122.211",
    "http://52.221.217.221",
    "http://18.139.160.37",
    "http://3.0.103.175",
    "http://3.0.19.88",
  ],
};
app.use(json());
app.use(cors(corsOptions));

// Lists all the tests Routes
app.use(patient);
app.use(testCategory);
app.use(referral);
app.use(hmo);
app.use(testResult);
app.use(testField);
app.use(testCategoryField);
app.use(results);
app.use(test);
app.use(medcert);

// Create
app.use(createPatient);
app.use(createTests);
app.use(createTestResult);
app.use(createPatientResult);
app.use(createTestFieldCategory);
app.use(createTestCategory);
app.use(createResults);
app.use(createTestField);

// Update
app.use(updateTestResult);
app.use(updatePatient);
app.use(updateResults);
app.use(updateTestField);

// Delete
app.use(deleteTestResult);
app.use(deleteTestCategory);
app.use(deleteTest);
app.use(deleteResults);
app.use(deleteTestField);
app.use(deletePatient);

app.all("*", async (req, res) => {
  throw new NotFoundError("Not Found");
});

app.use(ErrorHandler);

export { app };
