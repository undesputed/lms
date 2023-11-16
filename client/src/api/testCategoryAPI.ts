import { ec_care_test_category } from "../entity/ec_care_test_category";
import API from "./helper/api";

export function testCategory(): Promise<ec_care_test_category> {
  return API.get<ec_care_test_category>(`testCategory`).then((res) => res.data);
}
