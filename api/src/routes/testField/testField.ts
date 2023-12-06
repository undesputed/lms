import express, { Request, Response } from "express";
import TestCatTestField from "../../model/lmsTestCatTestField.model";
import TestField from "../../model/testField.model";

const router = express.Router();

router.get("/api/testField/", async (req: Request, res: Response) => {
  try {
    const response = await TestField.retrieve();
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/testField/:id", async (req: Request, res: Response) => {
  try {
    const id: number | string = req.params.id;
    const response = await TestField.retrieveById(id);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

export { router as testField };
