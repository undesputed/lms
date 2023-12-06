import express, {
    Request,
    Response
} from "express";
import TestField from "../../model/testField.model";

const router = express.Router();

router.post("/api/testField/", async (
    req: Request, res: Response
) => {
    try {
        const {
            test_name,
            unit,
            maleRefRange,
            femaleRefRange,
            refRange,
            desirableRefRange,
            borderlineRefRange,
            highRiskRefRange,
            other
        } = req.body;
        const newData = new TestField({
            id: null,
            test_name,
            unit,
            maleRefRange,
            femaleRefRange,
            refRange,
            desirableRefRange,
            borderlineRefRange,
            highRiskRefRange,
            other,
            status: 1,
            created_at: new Date(),
            updated_at: null
        })
        const createTestCat: any = await TestField.create(newData);
        newData.id = createTestCat.insertId;
        res.status(201).send(newData);
    } catch (err) {
        console.log(err);
    }
})

export {
    router as createTestField
}