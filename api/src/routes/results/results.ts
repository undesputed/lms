import express, { Request, Response, response } from "express";
import Results from "../../model/results.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import { responseEncoding } from "axios";

const router = express.Router();

router.get("/api/results", async (req: Request, res: Response) => {
    try {
        const response = await Results.retrieve();
        res.status(200).send(response);
    } catch (err) {
        throw new DatabaseQueryError("Something went wrong!!!");
    }
});

router.get("/api/results/patient/:patient_id", async (req: Request, res: Response) => {
    try {
        const id: number | string = req.params.patient_id;
        const resopnse = await Results.findByPatient(id);
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
    }
})

router.get("/api/results/test/:test_id", async (req: Request, res: Response) => {
    try {
        const id: number | string = req.params.test_id;
        const response = await Results.findByTest(id);
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
    }
})

router.get("/api/results/test/field/:test_id/:patient_id", async (req: Request, res: Response) => {
    try {
        const id: number | string = req.params.test_id;
        const patient_id: number | string = req.params.patient_id;
        const response: any = await Results.findTestFieldByTest(id, patient_id);
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
    }
})

export { router as results };
