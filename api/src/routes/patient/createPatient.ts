import express, { Request, Response } from "express";
import Patient from "../../model/patient.model";
import { body } from "express-validator";
import { validateRequest } from "../../middleware/validateRequest";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import { DataFound } from "../../data/success";

const router = express.Router();

router.post(
  "/api/patient",
  [
    body("fullName").notEmpty().withMessage("FullName is required"),
    body("sex").isNumeric().withMessage("Gender is required"),
    body("status").isNumeric().notEmpty().withMessage("Status is Required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      fullName,
      sex,
      birthdate,
      dateOfVisit,
      address,
      email,
      phone,
      status,
      lms_referral_id,
      lms_company_id,
      lms_hmo_id,
    } = req.body;

    const newPatient = new Patient({
      id: null,
      fullName: fullName,
      sex: sex,
      birthdate: birthdate,
      dateOfVisit: dateOfVisit,
      address: address,
      email: email,
      phone: phone,
      status: status,
      created_at: new Date(),
      updated_at: null,
      lms_company_id: lms_company_id ? lms_company_id : null,
      lms_referral_id: lms_referral_id ? lms_referral_id : null,
      lms_hmo_id: lms_hmo_id ? lms_hmo_id : null,
    });

    try {
      // const patient = await Patient.findOneByFullName(fullName);
      // if (patient) {
      //   res.status(301).send({
      //     message: "Patient already Exists",
      //     data: { patient: patient },
      //   });
      // } else {
      const createPatient: any = await Patient.create(newPatient);
      newPatient.id = createPatient.insertId;
      res.status(201).send(newPatient);
      // }
    } catch (err) {
      throw new DatabaseQueryError("Something went wrong!!!");
    }
  }
);

export { router as createPatient };
