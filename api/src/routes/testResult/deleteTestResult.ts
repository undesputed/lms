import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import TestResult from "../../model/testResult.model";

const router = express.Router();

router.delete("/api/testResult/:id", async (req: Request, res: Response) => {
  try {
    const id: number | string = req.params.id;
    const response = await TestResult.delete(id);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/api/testResult/byTest/:test_id", async (req: Request, res: Response) => {
  try {
    const id: number | string = req.params.test_id;
    const response = await TestResult.deleteByTestId(id);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

export { router as deleteTestResult };
