import express, { Request, Response } from "express";
import Test from "../../model/test.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import TestCatTestField from "../../model/lmsTestCatTestField.model";

const router = express.Router();

router.get("/api/testFieldCategory", async (req: Request, res: Response) => {
  try {
    const response = await TestCatTestField.retrieve();
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

router.get(
  "/api/testFieldCategory/:test_cat_id",
  async (req: Request, res: Response) => {
    try {
      const id: number | string = req.params.test_cat_id;
      const response = await TestCatTestField.findByTestCat(id);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

export { router as testCategoryField };
