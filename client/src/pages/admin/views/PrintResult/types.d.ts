import { ec_care_patient } from "../../../../entity/ec_care_patient"
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";

export type State = {
    patient: ec_care_patient;
    testResult: ec_care_testResult[];
};

export type Action =
    | { type: "setPatient"; payload: any }
    | { type: "setTestResult"; payload: any };