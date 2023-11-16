import { ec_care_hmo } from "../../../entity/ec_care_hmo";
import { ec_care_patient } from "../../../entity/ec_care_patient";
import { ec_care_referral } from "../../../entity/ec_care_referral";
import { ec_care_test_category } from "../../../entity/ec_care_test_category";

export type State = {
  value: number;
  open: boolean;
  editPatient: boolean;
  patient: ec_care_patient;
  patients: ec_care_patient[];
  age: number;
  testCategory: ec_care_test_category[];
  checkedCategory: [];
  addedTests: ec_care_test_category[];
  onRemoveCheckedCat: [];
  updateProfile: ec_care_patient;
};

export type Action =
  | { type: "setValue"; payload: number }
  | { type: "setPatient"; name: string; value: string }
  | { type: "setPatients"; payload: any }
  | { type: "setUpdateProfile"; payload: ec_care_patient }
  | { type: "onChangeUpdateProfile"; name: string; value: string }
  | { type: "setChecked"; payload: any }
  | { type: "setRemovedChecked"; payload: any }
  | { type: "setAddedTest"; payload: any }
  | { type: "updateAddedTest"; payload: any }
  | { type: "removeTest"; payload: any }
  | { type: "openEditPatient"; payload: boolean }
  | { type: "handleOpen"; payload: boolean };
