import { GridRowId } from "@mui/x-data-grid";
import { ec_care_test_category } from "../../../entity/ec_care_test_category";
import { ec_care_test_field_category_field } from "../../../entity/ec_care_test_field_category_field";
import { ec_care_test_field } from "../../../entity/ec_care_test_field";
import { ec_care_tests } from "../../../entity/ec_care_tests";

export type State = {
  testCategory: ec_care_test_category[];
  testCategoryField: ec_care_test_field_category_field[];
  testField: ec_care_test_field[];
  test: ec_care_tests[];
  openPreviewModal: boolean;
  openEditModal: boolean;
  testCategoryId: number;
  openChangeOrder: boolean;
};

export type Action =
  | { type: "setTestCategory"; payload: any }
  | { type: "setOpenPreviewModal"; payload: boolean }
  | { type: "setOpenEditModal"; payload: boolean }
  | { type: "setTestCategoryId"; payload: GridRowId }
  | { type: "setTestCategoryField"; payload: any }
  | { type: "setTestField"; payload: any }
  | { type: "setOpenChangeOrder"; payload: boolean }
  | { type: "setTest"; payload: any };
