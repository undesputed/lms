import { ec_care_test_field } from "../../../entity/ec_care_test_field";

export type State = {
  openAddModal: boolean;
  openEditModa: boolean;
  openViewModal: boolean;
  testField: ec_care_test_field[];
  field: ec_care_test_field;
};

export type Action =
  | { type: "setOpenAddModal"; payload: boolean }
  | { type: "setOpenEditModal"; payload: boolean }
  | { type: "setOpenViewModal"; payload: boolean }
  | { type: "setTestField"; payload: any }
  | { type: "setField"; name: any; value: any }
  | { type: "setFieldById"; payload: any };
