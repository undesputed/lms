import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Test {
  id: number | null;
  test_id: number | null;
  patient_id: number | null;
  field_id: number | null;
  result: string | null;
  testDate: Date | string | null;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(test: {
    id: number | null;
    test_id: number | null;
    patient_id: number | null;
    field_id: number | null;
    result: string | null;
    testDate: Date | string | null;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = test.id;
    this.test_id = test.test_id;
    this.patient_id = test.patient_id;
    this.field_id = test.field_id;
    this.result = test.result;
    this.testDate = test.testDate;
    this.status = test.status;
    this.created_at = test.created_at;
    this.updated_at = test.updated_at;
  }
  static async create(newTest: Test): Promise<Test | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_test SET ?";

      sql.query(query, [newTest], (err, res: any) => {
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

  static async findByPatient(test_id: number): Promise<Test | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_test WHERE patient_id = ${test_id}`,
        (err, res: any) => {
          if (err) {
            reject(new DatabaseQueryError("Error Retrieving Test"));
          } else {
            resolve(res.length ? res[0] : null);
          }
        }
      );
    });
  }
}