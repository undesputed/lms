import express, { Request, Response } from "express";
import Patient from "../model/patient.model";

const router = express.Router();

router.get("/api/patient", async (req: Request, res: Response) => {
  Patient.retrieve((err, patient) => {
    if (err) {
      console.log(err);
      return;
    }

    res.send({ patient });
  });
});

export { router as patient };
