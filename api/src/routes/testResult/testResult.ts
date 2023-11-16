import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import TestResult from "../../model/testResult.model";

const router = express.Router();

router.get("/api/testResult", async (req: Request, res: Response) => {
  try {
    const response = await TestResult.fetchAll();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get(
  "/api/testResult/findById/:id",
  async (req: Request, res: Response) => {
    try {
      const id: number | string = req.params.id;
      const response = await TestResult.findBydId(id);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

router.get(
  "/api/testResult/:patient_id",
  async (req: Request, res: Response) => {
    try {
      const id: number | string = req.params.patient_id;
      const response = await TestResult.findByPatient(id);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

router.get(
  "/api/testResult/total/:patient_id",
  async (req: Request, res: Response) => {
    try {
      const id: number | string = req.params.patient_id;
      const response = await TestResult.findTotalByPatientId(id);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

export { router as testResult };
