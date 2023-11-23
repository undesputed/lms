import express, { Request, Response } from "express";
import PatientResult from "../../model/patientResult.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.post("/api/patientResult", async (req: Request, res: Response) => {
  const { patient_id, cat_test_field_id, result, status } = req.body;

  const newResult = new PatientResult({
    id: null,
    patient_id,
    cat_test_field_id,
    result,
    status,
    created_at: new Date(),
    updated_at: null,
  });

  try {
    const createResult: any = await PatientResult.create(newResult);
    newResult.id = createResult.insertId;
    res.status(201).send(newResult);
  } catch (err) {
    console.log(err);
  }
});

export { router as createPatientResult };
