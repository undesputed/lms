import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import Patient from "../../model/patient.model";

const router = express.Router();

router.delete("/api/patient/:id", async (req: Request, res: Response) => {
  try {
    const patient_id: number | string = req.params.id;
    const response = await Patient.delete(patient_id);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});
export { router as deletePatient };
