import { ec_care_test_category } from "../../../../entity/ec_care_test_category"
import { ec_care_test_field } from "../../../../entity/ec_care_test_field";

export type State = {
    testCategory: ec_care_test_category;
    testField: ec_care_test_field
    selectedFields: any;
}

export type Action =
    | { type: "setTestCategory"; name: string; value: any }
    | { type: "setTestField"; name: string; value: any }
    | { type: "setSelectedFields"; payload: any };