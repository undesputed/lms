import { ec_care_tests } from "../entity/ec_care_tests";
import API from "./helper/api";

export function tests(): Promise<ec_care_tests> {
  return API.get<ec_care_tests>(`test`).then((res) => res.data);
}

export function findTestByTest(
  test_id: number | string
): Promise<ec_care_tests> {
  return API.get<ec_care_tests>(`test/${test_id}`).then((res) => res.data);
}

export function findTestDetailsByTest(test_id: number | string): Promise<any> {
  return API.get<any>(`test/testCat/${test_id}`).then((res) => res.data);
}

export function createTest(test: ec_care_tests): Promise<ec_care_tests> {
  return API.post<ec_care_tests>(`test`, test).then((res) => res.data);
}

export function deleteTest(test_id: number | string): Promise<any> {
  return API.delete<any>(`test/${test_id}`).then((res) => res.data);
}

export function deleteTestByField(
  test_id: number | string,
  field_id: number | string
): Promise<any> {
  return API.delete<any>(`test/${test_id}/${field_id}`).then((res) => res.data);
}
