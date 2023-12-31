import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Test {
  id: number | null;
  test_id: number | null;
  field_id: number | null;
  testDate: Date | string | null;
  orderNum: number | null;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(test: {
    id: number | null;
    test_id: number | null;
    field_id: number | null;
    testDate: Date | string | null;
    orderNum: number | null;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = test.id;
    this.test_id = test.test_id;
    this.field_id = test.field_id;
    this.testDate = test.testDate;
    this.orderNum = test.orderNum;
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

  static async findByTest(test_id: number | string): Promise<Test | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_test WHERE test_id = ${test_id} ORDER BY orderNum ASC`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Retreiving Test"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  static async findTestByTestId(
    test_cat_id: number | string
  ): Promise<Test | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `select * from lms_test
        inner join lms_test_field on lms_test_field.id = lms_test.field_id
        inner join lms_test_category on lms_test_category.id = lms_test.test_id
        where lms_test_category.id = ${test_cat_id}
        order by lms_test.orderNum asc;`,
        (err, res: any) => {
          if (err) {
            reject(new DatabaseQueryError("Error Retrieving Test"));
          } else {
            resolve(res.length ? res : null);
          }
        }
      );
    });
  }

  static async deleteTest(test_id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_test WHERE test_id = ${test_id}`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Deleting test"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  static async deleteTestByField(
    test_id: number,
    field_id: number
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_test WHERE test_id = ${test_id} AND field_id = ${field_id}`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Deleting test"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }
}
