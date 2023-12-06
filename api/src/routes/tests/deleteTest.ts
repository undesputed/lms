import express, { Request, Response } from "express";
import Test from "../../model/test.model";

const router = express.Router();

router.delete("/api/test/:test_id", async (req: Request, res: Response) => {
  try {
    const id: any = req.params.test_id;
    const createTests: any = await Test.deleteTest(id);
    res.status(200).send(createTests);
  } catch (err) {
    console.log(err);
  }
});

router.delete(
  "/api/test/:test_id/:field_id",
  async (req: Request, res: Response) => {
    try {
      const test_id: any = req.params.test_id;
      const field_id: any = req.params.field_id;
      const deleteTest: any = await Test.deleteTestByField(test_id, field_id);
      res.status(200).send(deleteTest);
    } catch (err) {
      console.log(err);
    }
  }
);

export { router as deleteTest };
