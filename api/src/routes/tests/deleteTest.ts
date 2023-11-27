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

export { router as deleteTest };
