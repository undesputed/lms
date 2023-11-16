import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import Hmo from "../../model/hmo.model";

const router = express.Router();

router.get("/api/hmo", async (req: Request, res: Response) => {
  try {
    const response = await Hmo.retrieve();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get("/api/hmo/:id", async (req: Request, res: Response) => {
  try {
    const id: number | string = req.params.id;
    const response = await Hmo.retrieveById(id);
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as hmo };
