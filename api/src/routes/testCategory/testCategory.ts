import express, { Request, Response } from "express";
import TestCategory from "../../model/testCategory.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.get("/api/testCategory", async (req: Request, res: Response) => {
  try {
    const response = await TestCategory.retrieve();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as testCategory };
