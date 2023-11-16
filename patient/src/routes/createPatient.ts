import express, { Request, Response } from "express";
import Patient from "../model/patient.model";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validateRequest";
import { DatabaseQueryError } from "../errors/dbQueryError";
import { DataFound } from "../data/success";

const router = express.Router();

router.post(
  "/api/patient",
  [
    body("fullName").notEmpty().withMessage("FullName is required"),
    body("sex").isNumeric().withMessage("Gender is required"),
    body("age").isNumeric().isInt({ gt: 0 }).withMessage("Age is required"),
    body("dateOfVisit").toDate().notEmpty().withMessage("Date is Required"),
    body("address").isString().notEmpty().withMessage("Address is Required"),
    body("email").isEmail().notEmpty().withMessage("Email is Required"),
    body("phone").notEmpty().withMessage("Phone Number is Required"),
    body("status").isNumeric().notEmpty().withMessage("Status is Required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { fullName } = req.body;

    Patient.findOneByFullName(fullName, (err, patient) => {
      if (err) {
        throw new DatabaseQueryError("Error Finding Patient");
      }
      if (!patient) {
        throw new DatabaseQueryError("Error Patient Data");
      }

      res.status(301).send({
        message: "Patient already Exists",
        data: [
          {
            id: patient,
          },
        ],
      });
    });
  }
);

export { router as createPatient };
