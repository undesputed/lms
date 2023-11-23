import express, { Request, Response } from "express";
import Test from "../../model/test.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import TestCatTestField from "../../model/lmsTestCatTestField.model";

const router = express.Router();

router.post("/api/testFieldCategory", async (req: Request, res: Response) => {
  const { test_category_id, test_field_id, status } = req.body;

  const newData = new TestCatTestField({
    id: null,
    test_category_id,
    test_field_id,
    status,
    created_at: new Date(),
    updated_at: null,
  });

  try {
    const createTestFieldCat: any = await TestCatTestField.create(newData);
    newData.id = createTestFieldCat.insertId;
    res.status(201).send(newData);
  } catch (err) {
    console.log(err);
  }
});

export { router as createTestFieldCategory };
