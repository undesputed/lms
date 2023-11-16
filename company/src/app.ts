import express from "express";
import "express-async-errors";
import { json } from "body-parser";

import { company } from "./routes/company";
import { NotFoundError } from "./errors/notFoundError";
import { ErrorHandler } from "./middleware/errorHandler";

const app = express();
app.use(json());

// Lists all the tests Routes
app.use(company);

app.all("*", async (req, res) => {
  throw new NotFoundError("Not Found");
});

app.use(ErrorHandler);

export { app };
