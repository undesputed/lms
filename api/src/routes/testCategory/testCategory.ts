import express, { Request, Response } from "express";
import TestCategory from "../../model/testCategory.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.get("/api/testCategory", async (req: Request, res: Response) => {
  try {
    const response = await TestCategory.retrieve();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get("/api/testCategory/:id", async (req: Request, res: Response) => {
  try {
    const id: number | string = req.params.id;
    const response: any = await TestCategory.findById(id);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

export { router as testCategory };
