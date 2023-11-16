import { GridRowId } from "@mui/x-data-grid";
import { ec_care_test_field_category_field } from "../entity/ec_care_test_field_category_field";
import API from "./helper/api";

// Retrieve
export function testCategoryField(): Promise<ec_care_test_field_category_field> {
  return API.get<ec_care_test_field_category_field>(`testFieldCategory`).then(
    (res) => res.data
  );
}

export function testCategoryFieldByFieldId(
  test_field_id: number | string | GridRowId
): Promise<ec_care_test_field_category_field> {
  return API.get<ec_care_test_field_category_field>(
    `testFieldCategory/${test_field_id}`
  ).then((res) => res.data);
}

// Create

// Update
