import express, { Request, Response } from "express";
import Results from "../../model/results.model";

const router = express.Router();

router.put("/api/results/:id", async (req: Request, res: Response) => {

    try {
        const {
            result
        } = req.body;
        const id: any = req.params.id;
        const update: any = await Results.update(id, result);
        res.status(201).send(update);
    } catch (err) {
        console.log(err);
    }
});

export { router as updateResults };
