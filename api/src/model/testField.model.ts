import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";
import Test from "./test.model";
import TestCategory from "./testCategory.model";

export default class TestField {
  id: number | null;
  test_name: string;
  unit: number;
  maleRefRange: string;
  femaleRefRange: string;
  refRange: string;
  desirableRefRange: string;
  borderlineRefRange: string;
  highRiskRefRange: number;
  other: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(testField: {
    id: number | null;
    test_name: string;
    unit: number;
    maleRefRange: string;
    femaleRefRange: string;
    refRange: string;
    desirableRefRange: string;
    borderlineRefRange: string;
    highRiskRefRange: number;
    other: string;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = testField.id;
    this.test_name = testField.test_name;
    this.unit = testField.unit;
    this.maleRefRange = testField.maleRefRange;
    this.femaleRefRange = testField.femaleRefRange;
    this.refRange = testField.refRange;
    this.desirableRefRange = testField.desirableRefRange;
    this.borderlineRefRange = testField.borderlineRefRange;
    this.highRiskRefRange = testField.highRiskRefRange;
    this.highRiskRefRange = testField.highRiskRefRange;
    this.other = testField.other;
    this.status = testField.status;
    this.created_at = testField.created_at;
    this.updated_at = testField.updated_at;
  }

  static async create(newTestField: TestField): Promise<TestField | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_test_field SET ?";

      sql.query(query, [newTestField], (err, res: any) => {
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

  static async retrieve(): Promise<TestField | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_test_field `, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Data"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async retrieveById(id: number | string): Promise<TestField | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_test_field WHERE id = ${id}`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Retrieving Data"));
          } else {
            resolve(res.length > 0 ? res[0] : null);
          }
        }
      );
    });
  }

  static async update(updateTestField: TestField): Promise<TestField | null> {
    return new Promise((resolve, reject) => {
      const query = "UPDATE lms_test_field SET ? where id = ?";
      const { id, ...updatedValues } = updateTestField;

      sql.query(query, [updatedValues, updateTestField.id], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Updated Patient"));
        } else {
          resolve(res.affectedRows > 0 ? updateTestField : null);
        }
      });
    });
  }

  static async deleteTestFieldById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_test_field WHERE id = ${id}`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Deleting Test Category"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }
}
