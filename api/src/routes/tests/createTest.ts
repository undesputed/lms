import express, { Request, Response } from "express";
import Test from "../../model/test.model";

const router = express.Router();

router.post("/api/test", async (req: Request, res: Response) => {
  const { test_id, field_id, testDate, orderNum, status } = req.body;

  const newTest = new Test({
    id: null,
    test_id,
    field_id,
    testDate,
    orderNum,
    status,
    created_at: new Date(),
    updated_at: null,
  });

  try {
    const createTests: any = await Test.create(newTest);
    newTest.id = createTests.insertId;
    res.status(201).send(newTest);
  } catch (err) {
    console.log(err);
  }
});

export { router as createTests };
