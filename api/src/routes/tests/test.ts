import express, { Request, Response } from "express";
import Test from "../../model/test.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.get("/api/test/:test_id", async (req: Request, res: Response) => {
    try {
        const id: number | string = req.params.test_id;
        const response = await Test.findByTest(id);
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
    }
})

export { router as test };
