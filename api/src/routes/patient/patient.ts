import express, { Request, Response } from "express";
import Patient from "../../model/patient.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.get("/api/patient", async (req: Request, res: Response) => {
  try {
    const response = await Patient.findByStatus();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get("/api/patient/:patient_id", async (req: Request, res: Response) => {
  try {
    const id: number | string = req.params.patient_id;
    const response = await Patient.findById(id);
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as patient };
