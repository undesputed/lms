import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/tests", (req: Request, res: Response) => {
  res.send({ message: "api/tests success" });
});

export { router as getTests };
