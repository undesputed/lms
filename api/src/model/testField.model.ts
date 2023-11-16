import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";
import Test from "./test.model";
import TestCategory from "./testCategory.model";

export default class TestField {
  id: number | null;
  test_name: string;
  unit: number;
  maleRefRange: Date | string | null;
  femailRefRagne: Date | string | null;
  refRange: string;
  desirableRefRange: string;
  borderlineRefRange: string;
  highRiskRefRange: number;
  other: Date | string | null;
  status: Date | string | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(testField: {
    id: number | null;
    test_name: string;
    unit: number;
    maleRefRange: Date | string | null;
    femailRefRagne: Date | string | null;
    refRange: string;
    desirableRefRange: string;
    borderlineRefRange: string;
    highRiskRefRange: number;
    other: Date | string | null;
    status: Date | string | null;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = testField.id;
    this.test_name = testField.test_name;
    this.unit = testField.unit;
    this.maleRefRange = testField.maleRefRange;
    this.femailRefRagne = testField.femailRefRagne;
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

  static async create(newTestField: Test): Promise<Test | null> {
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
}
