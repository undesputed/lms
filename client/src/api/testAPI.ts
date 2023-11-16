import { ec_care_tests } from "../entity/ec_care_tests";
import API from "./helper/api";

export function tests(): Promise<ec_care_tests> {
  return API.get<ec_care_tests>(`test`).then((res) => res.data);
}

export function createTest(test: ec_care_tests): Promise<ec_care_tests> {
  return API.post<ec_care_tests>(`test`, test).then((res) => res.data);
}
