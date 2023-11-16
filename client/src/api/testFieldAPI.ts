import { ec_care_test_field } from "../entity/ec_care_test_field";
import API from "./helper/api";

// Retrieve
export function TestField(): Promise<ec_care_test_field> {
  return API.get<ec_care_test_field>(`testField`).then((res) => res.data);
}
// Create

// Update
