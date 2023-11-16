import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/requests", (req: Request, res: Response) => {
  res.send({ message: "api/tests success" });
});

export { router as requests };
