import express, {
    Request,
    Response
} from "express";
import TestField from "../../model/testField.model";

const router = express.Router();

router.delete("/api/testField/:id", async (
    req: Request, res: Response
) => {
    const id: any = req.params.id;

    try {
        const deleteTestField: any = await TestField.deleteTestFieldById(id);
        res.status(201).send(deleteTestField);
    } catch (err) {
        console.log(err);
    }
})

export {
    router as deleteTestField
}