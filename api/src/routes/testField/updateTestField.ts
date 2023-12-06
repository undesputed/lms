import express, { Request, Response } from "express";
import TestField from "../../model/testField.model";

const router = express.Router();

router.put("/api/testField/", async (req: Request, res: Response) => {
  try {
    const {
      id,
      test_name,
      unit,
      maleRefRange,
      femaleRefRange,
      refRange,
      desirableRefRange,
      borderlineRefRange,
      highRiskRefRange,
      other,
      status,
      created_at,
    } = req.body;
    const newData = new TestField({
      id,
      test_name,
      unit,
      maleRefRange,
      femaleRefRange,
      refRange,
      desirableRefRange,
      borderlineRefRange,
      highRiskRefRange,
      other,
      status,
      created_at: new Date(created_at).toISOString().split("T")[0],
      updated_at: new Date(),
    });
    const update: any = await TestField.update(newData);
    res.status(201).send(update);
  } catch (err) {
    console.log(err);
  }
});

export { router as updateTestField };
