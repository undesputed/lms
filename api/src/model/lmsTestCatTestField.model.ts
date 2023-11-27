import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";
import Patient from "./patient.model";
import Test from "./test.model";
import TestCategory from "./testCategory.model";

export default class TestCatTestField {
  id: number | null;
  test_category_id: TestCategory | null;
  test_field_id: Test | null;
  status: number | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(testCatTestField: {
    id: number | null;
    test_category_id: TestCategory | null;
    test_field_id: Test | null;
    status: number | null;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = testCatTestField.id;
    this.test_category_id = testCatTestField.test_category_id;
    this.test_field_id = testCatTestField.test_field_id;
    this.status = testCatTestField.status;
    this.created_at = testCatTestField.created_at;
    this.updated_at = testCatTestField.updated_at;
  }

  static async create(
    newTestCatTestField: TestCatTestField
  ): Promise<TestCatTestField | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_test_cat_test_field SET ?";

      sql.query(query, [newTestCatTestField], (err, res: any) => {
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
      sql.query(`SELECT * FROM lms_test_cat_test_field `, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Data"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async findByTestCat(
    test_cat_id: number | string
  ): Promise<Test | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_test_cat_test_field
        INNER JOIN lms_test_field ON lms_test_field.id = lms_test_cat_test_field.test_field_id
        WHERE lms_test_cat_test_field.test_category_id = ${test_cat_id}`,
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
}
