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

const app = express();
var corsOptions = {
  origin: ["http://localhost:3000", "http://18.141.160.31"],
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

// Create
app.use(createPatient);
app.use(createTests);
app.use(createTestResult);

// Update
app.use(updateTestResult);
app.use(updatePatient);

// Delete
app.use(deleteTestResult);

app.all("*", async (req, res) => {
  throw new NotFoundError("Not Found");
});

app.use(ErrorHandler);

export { app };
