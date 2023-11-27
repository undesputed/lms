import { ec_care_results } from "../entity/ec_care_results";
import API from "./helper/api";

export function retrieveTestByTestField(test_id: number | string, patient_id: number | string): Promise<any> {
    return API.get<any>(`results/test/field/${test_id}/${patient_id}`).then((res) => res.data);
}

export function createResult(result: ec_care_results): Promise<ec_care_results> {
    return API.post<ec_care_results>(`results`, result).then((res) => res.data);
}

export function editResult(id: number | string, result: any): Promise<any> {
    return API.put<any>(`results/${id}`, { result }).then((res) => res.data)
}

export function deleteResult(test_id: number | string, patient_id: number | string): Promise<any> {
    return API.delete<any>(`results/${test_id}/${patient_id}`).then((res) => res.data)
}

export function deleteResultByTest(test_id: number | string): Promise<any> {
    return API.delete<any>(`results/${test_id}`).then((res) => res.data)
}