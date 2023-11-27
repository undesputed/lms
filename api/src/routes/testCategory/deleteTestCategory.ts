import express, {
    Request,
    Response
} from "express";
import TestCategory from "../../model/testCategory.model";

const router = express.Router();

router.delete("/api/testCategory/:id", async (
    req: Request, res: Response
) => {
    const id: any = req.params.id;

    try {
        const deleteTestCat: any = await TestCategory.deleteTestCategoryById(id);
        res.status(201).send(deleteTestCat);
    } catch (err) {
        console.log(err);
    }
})

export {
    router as deleteTestCategory
}