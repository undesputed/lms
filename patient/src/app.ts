import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import { patient } from "./routes/patient";
import { createPatient } from "./routes/createPatient";
import { NotFoundError } from "./errors/notFoundError";
import { ErrorHandler } from "./middleware/errorHandler";

const app = express();
app.use(json());

// Lists all the tests Routes
app.use(patient);
app.use(createPatient);

app.all("*", async (req, res) => {
  throw new NotFoundError("Not Found");
});

app.use(ErrorHandler);

export { app };
