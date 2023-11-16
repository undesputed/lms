import express, { Request, Response } from "express";
import Test from "../../model/test.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.get("/api/test",async (req:Request, res: Response) => {
    
})

export { router as test };
