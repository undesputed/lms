import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";
import TestCatTestField from "./lmsTestCatTestField.model";
import Patient from "./patient.model";
import Test from "./test.model";

export default class PatientResult {
  id: number | null;
  patient_id: Patient | null;
  cat_test_field_id: TestCatTestField | null;
  result: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(patientResult: {
    id: number | null;
    patient_id: Patient | null;
    cat_test_field_id: TestCatTestField | null;
    result: string;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = patientResult.id;
    this.patient_id = patientResult.patient_id;
    this.cat_test_field_id = patientResult.cat_test_field_id;
    this.result = patientResult.result;
    this.status = patientResult.status;
    this.created_at = patientResult.created_at;
    this.updated_at = patientResult.updated_at;
  }

  static async create(
    newPatientResult: PatientResult
  ): Promise<PatientResult | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_patient_results SET ?";

      sql.query(query, [newPatientResult], (err, res: any) => {
        if (err) {
          console.log(
            "🚀 ~ file: test.model.ts:36 ~ Test ~ sql.query ~ err:",
            err
          );
          reject(new DatabaseQueryError("Error Creating new tests"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async retrieve(): Promise<TestCatTestField | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_patient_results `, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Data"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async delete(patient_id: number | string): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_patient_results
                WHERE lms_patient_id = ${patient_id}
                `,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Deleting Test Result"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }
}
