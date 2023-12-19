import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import Results from "../../model/results.model";

const router = express.Router();

router.delete(
  "/api/results/patient/:patient_id",
  async (req: Request, res: Response) => {
    try {
      const patient_id: number | string = req.params.patient_id;
      const response = await Results.deleteByPatientId(patient_id);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

router.delete(
  "/api/results/:test_id/:patient_id",
  async (req: Request, res: Response) => {
    try {
      const test_id: number | string = req.params.test_id;
      const patient_id: number | string = req.params.patient_id;
      const response = await Results.delete(test_id, patient_id);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

router.delete("/api/results/:test_id", async (req: Request, res: Response) => {
  try {
    const test_id: number | string = req.params.test_id;
    const response = await Results.deleteByTestId(test_id);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

export { router as deleteResults };
