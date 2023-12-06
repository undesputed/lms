import { ec_care_patient } from "../../../entity/ec_care_patient";
import { ec_care_testResult } from "../../../entity/ec_care_testResult";
import { ec_care_test_category } from "../../../entity/ec_care_test_category";

export type State = {
  openModal: boolean;
  addTestModal: boolean;
  previewModal: boolean;
  patient: ec_care_patient;
  result: ec_care_testResult;
  testCategory: ec_care_test_category[];
  testResult: ec_care_testResult[];
  addedTests: ec_care_test_category[];
  filteredTests: ec_care_test_category[];
  total: number;
  testType: string;
  test_id: number;
  patientResult: any[];
  container: any[];
  medTech: string;
  medTechId: number;
};

export type Action =
  | { type: "setOpenModal"; payload: boolean }
  | { type: "setAddTestModal"; payload: boolean }
  | { type: "setPreviewModal"; payload: boolean }
  | { type: "setPatient"; payload: any }
  | { type: "setResultOnChange"; name: string; value: any }
  | { type: "setResult"; payload: any }
  | { type: "setTestCategory"; payload: ec_care_test_category }
  | { type: "setAddedTests"; payload: any }
  | { type: "setFilteredTests"; payload: any }
  | { type: "setTotal"; payload: number }
  | { type: "setTestType"; payload: string }
  | { type: "setTestResult"; payload: any }
  | { type: "setTestId"; payload: any }
  | { type: "setPatientResult"; payload: any }
  | { type: "setContainer"; payload: any }
  | { type: "setContainerEmpty"; payload: any }
  | { type: "setMedTech"; payload: string | number }
  | { type: "setMedTechId"; payload: any };
