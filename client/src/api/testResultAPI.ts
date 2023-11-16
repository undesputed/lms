import API from "./helper/api";
import { ec_care_testResult } from "../entity/ec_care_testResult";

// Retrieve
export function testResult(): Promise<ec_care_testResult> {
  return API.get<ec_care_testResult>(`testResult`).then((res) => res.data);
}

export function testResultByPatient(
  patient_id: number | string
): Promise<ec_care_testResult> {
  return API.get<ec_care_testResult>(`testResult/${patient_id}`).then(
    (res) => res.data
  );
}

export function testResultById(
  id: number | string
): Promise<ec_care_testResult> {
  return API.get<ec_care_testResult>(`testResult/findById/${id}`).then(
    (res) => res.data
  );
}

export function patientTotalById(
  id: number | string
): Promise<{ total: number | string } | null> {
  return API.get<{ total: number | string }>(`testResult/total/${id}`).then(
    (res) => res.data
  );
}

// Create
export function createTestResult(
  testResult: ec_care_testResult
): Promise<ec_care_testResult> {
  return API.post<ec_care_testResult>(`testResult`, testResult).then(
    (res) => res.data
  );
}
// Update
export function updateTestResult(
  testResult: ec_care_testResult
): Promise<ec_care_testResult> {
  return API.put<ec_care_testResult>(`testResult`, testResult).then(
    (res) => res.data
  );
}

// Delete
export function deleteTestResult(id: number | string): Promise<any> {
  return API.delete<any>(`testResult/${id}`).then((res) => res.data);
}
