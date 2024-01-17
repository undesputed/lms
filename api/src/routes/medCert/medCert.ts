import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import MedCert from "../../model/medCert.model";

const router = express.Router();

router.get("/api/medcert", async (req: Request, res: Response) => {
  try {
    const response = await MedCert.select();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as medcert };
