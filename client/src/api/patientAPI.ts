import API from "./helper/api";
import { ec_care_patient } from "../entity/ec_care_patient";

// Retrieve
export function patient(): Promise<ec_care_patient> {
  return API.get<ec_care_patient>(`patient`).then((res) => res.data);
}

export function patientById(id: number | string): Promise<ec_care_patient> {
  return API.get<ec_care_patient>(`patient/${id}`).then((res) => res.data);
}

// Create
export function createPatient(
  patient: ec_care_patient
): Promise<ec_care_patient> {
  return API.post<ec_care_patient>(`patient`, patient).then((res) => res.data);
}

// Update
export function updatePatient(
  patient: ec_care_patient
): Promise<ec_care_patient> {
  return API.put<ec_care_patient>(`patient`, patient).then((res) => res.data);
}
