import express, {
    Request,
    Response
} from "express";
import TestCategory from "../../model/testCategory.model";

const router = express.Router();

router.post("/api/testCategory", async (
    req: Request, res: Response
) => {
    const {
        name,
        description,
        department,
        price,
        type,
        table_name,
        status
    } = req.body;

    const newData = new TestCategory({
        id: null,
        name,
        description,
        department,
        price,
        type,
        table_name,
        status: 0,
        created_at: new Date(),
        updated_at: null
    })

    try {
        const createTestCat: any = await TestCategory.create(newData);
        newData.id = createTestCat.insertId;
        res.status(201).send(newData);
    } catch (err) {
        console.log(err);
    }
})

export {
    router as createTestCategory
}