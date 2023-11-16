import express, { Request, Response } from "express";
import Referral from "../../model/referral.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.get("/api/referral", async (req: Request, res: Response) => {
  try {
    const response = await Referral.retrieve();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something Went Wrong!!!");
  }
});

export { router as referral };
