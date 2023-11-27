import { ec_care_test_category } from "../entity/ec_care_test_category";
import API from "./helper/api";

export function testCategory(): Promise<ec_care_test_category> {
  return API.get<ec_care_test_category>(`testCategory`).then((res) => res.data);
}

export function testCategoryById(id: number | string): Promise<ec_care_test_category> {
  return API.get<ec_care_test_category>(`testCategory/${id}`).then((res) => res.data)
}

export function createCategory(testCategory: ec_care_test_category): Promise<ec_care_test_category> {
  return API.post<ec_care_test_category>(`testCategory`, testCategory).then((res) => res.data);
}

export function deleteTestCategory(id: number | string): Promise<any> {
  return API.delete<any>(`testCategory/${id}`).then((res) => res.data)
}