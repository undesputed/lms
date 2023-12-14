import express, { Request, Response } from "express";
import Patient from "../../model/patient.model";
import { body } from "express-validator";
import { validateRequest } from "../../middleware/validateRequest";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import { DataFound } from "../../data/success";

const router = express.Router();

router.put("/api/patient", async (req: Request, res: Response) => {
  const {
    id,
    fullName,
    sex,
    birthdate,
    dateOfVisit,
    address,
    email,
    phone,
    company,
    status,
    created_at,
    lms_referral_id,
    lms_company_id,
    lms_hmo_id,
  } = req.body;

  const updatedPatient = new Patient({
    id,
    fullName: fullName,
    sex: sex,
    birthdate: new Date(birthdate).toISOString().split("T")[0],
    dateOfVisit: new Date(dateOfVisit).toISOString().split("T")[0],
    address: address,
    email: email,
    phone: phone,
    company: company,
    status: status,
    created_at: new Date(created_at),
    updated_at: new Date(),
    lms_company_id,
    lms_referral_id,
    lms_hmo_id,
  });

  try {
    const update = await Patient.update(updatedPatient);
    res.status(201).send(update);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as updatePatient };
