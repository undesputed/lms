import { ec_care_hematology } from "../entity/ec_care_hematology";
import API from "./helper/api";

export function hematology(): Promise<ec_care_hematology> {
  return API.get<ec_care_hematology>(`hema`).then((res) => res.data);
}

export function createHematology(
  patient: ec_care_hematology
): Promise<ec_care_hematology> {
  return API.post<ec_care_hematology>(`hema`, patient).then((res) => res.data);
}
