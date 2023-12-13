import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Results {
  id: number | null;
  result: string | null;
  lms_patient_id: number | null;
  lms_test_id: number | null;
  testDate: Date | string | null;
  status: number | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(results: {
    id: number | null;
    result: string | null;
    lms_patient_id: number | null;
    lms_test_id: number | null;
    testDate: Date | string | null;
    status: number | null;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = results.id;
    this.result = results.result;
    this.lms_patient_id = results.lms_patient_id;
    this.lms_test_id = results.lms_test_id;
    this.testDate = results.testDate;
    this.status = results.status;
    this.created_at = results.created_at;
    this.updated_at = results.updated_at;
  }
  static async create(newResults: Results): Promise<Results | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_patient_results SET ?";
      sql.query(query, [newResults], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Creating new tests"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async retrieve(): Promise<Results | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_patient_results ORDER BY name ASC`,
        (err, res: any) => {
          if (err) {
            reject(
              new DatabaseQueryError("Error Retrieving all Test Categories")
            );
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  static async findByPatient(
    patient_id: number | string
  ): Promise<Results | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_patient_results WHERE lms_patient_id = ${patient_id}`,
        (err, res: any) => {
          if (err) {
            reject(new DatabaseQueryError("Error Retrieving data"));
          } else {
            resolve(res.length ? res : null);
          }
        }
      );
    });
  }

  static async findByTest(test_id: number | string): Promise<Results | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_patient_results WHERE lms_test_id - ${test_id}`,
        (err, res: any) => {
          if (err) {
            reject(new DatabaseQueryError("Error Retreiving Data"));
          } else {
            resolve(res.length ? res : null);
          }
        }
      );
    });
  }

  static async findTestFieldByTest(
    test_id: number | string,
    patient_id: number | string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = `select *, (lms_patient_results.id) as patient_results_id,(lms_test.id) as test_id,(lms_test_field.id) as field_id from lms_patient_results left join lms_test on lms_test.id = lms_patient_results.lms_test_id left join lms_test_field on lms_test_field.id = lms_test.field_id where lms_test.test_id = ${test_id} and lms_patient_id = ${patient_id} order by lms_test.orderNum asc`;
      sql.query(query, (err, res: any) => {
        if (err) {
          console.log(err);
          new DatabaseQueryError("Error Retrievig Data");
        } else {
          resolve(res);
        }
      });
    });
  }

  static async update(id: number, result: any) {
    return new Promise<Results | null>((resolve, reject) => {
      const query = "UPDATE lms_patient_results SET result = ? WHERE id = ?";

      sql.query(query, [result, id], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Updating Patient Results"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async delete(
    test_id: number | string,
    patient_id: number | string
  ): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_patient_results
                WHERE lms_patient_results.lms_test_id in (SELECT id FROM lms_test WHERE test_id = ${test_id})
                      AND lms_patient_id = ${patient_id};
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

  static async deleteByTestId(test_id: number | string): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_patient_results
                WHERE lms_patient_results.lms_test_id in (SELECT id FROM lms_test WHERE test_id = ${test_id})
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

  static async deleteByPatientId(
    patient_id: number | string
  ): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_patient_results WHERE lms_patient_id = ${patient_id}`,
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
