import { ec_care_test_field } from "../entity/ec_care_test_field";
import API from "./helper/api";

// Retrieve
export function TestField(): Promise<ec_care_test_field> {
  return API.get<ec_care_test_field>(`testField`).then((res) => res.data);
}

export function TestFieldById(
  id: number | string
): Promise<ec_care_test_field> {
  return API.get<ec_care_test_field>(`testField/${id}`).then((res) => res.data);
}
// Create
export function CreateTestField(
  testField: ec_care_test_field
): Promise<ec_care_test_field> {
  return API.post<ec_care_test_field>(`testField`, testField).then(
    (res) => res.data
  );
}
// Update
export function updateTestField(
  testField: ec_care_test_field
): Promise<ec_care_test_field> {
  return API.put<ec_care_test_field>(`testField`, testField).then(
    (res) => res.data
  );
}

// Delete
export function DeleteTestFieldById(id: number): Promise<any> {
  return API.delete<any>(`testField/${id}`).then((res) => res.data);
}
