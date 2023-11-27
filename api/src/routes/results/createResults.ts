import express, {
    Request,
    Response
} from "express";
import Results from "../../model/results.model";

const router = express.Router();

router.post("/api/results", async (
    req: Request, res: Response
) => {

    const {
        result,
        lms_patient_id,
        lms_test_id
    } = req.body;

    const newData: any = new Results({
        id: null,
        result,
        lms_patient_id,
        lms_test_id,
        testDate: new Date().toISOString().split('T')[0],
        status: 0,
        created_at: new Date(),
        updated_at: null
    })

    try {
        const createTestCat: any = await Results.create(newData);
        newData.id = createTestCat.insertId;
        res.status(201).send(newData);
    } catch (err) {
        console.log(err);
    }
})

export {
    router as createResults
}