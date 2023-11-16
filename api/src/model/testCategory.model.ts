import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class TestCategory {
  id: number | null;
  name: number;
  description: string;
  price: number;
  type: string;
  table_name: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(testCategory: {
    id: number | null;
    name: number;
    description: string;
    price: number;
    type: string;
    table_name: string;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = testCategory.id;
    this.name = testCategory.name;
    this.description = testCategory.description;
    this.price = testCategory.price;
    this.type = testCategory.type;
    this.table_name = testCategory.table_name;
    this.status = testCategory.status;
    this.created_at = testCategory.created_at;
    this.updated_at = testCategory.updated_at;
  }
  static async create(
    newTestCategory: TestCategory
  ): Promise<TestCategory | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_test_category SET ?";

      sql.query(query, [newTestCategory], (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Creating new tests"));
        } else {
          resolve(res.length ? res[0] : null);
        }
      });
    });
  }

  static async retrieve(): Promise<TestCategory | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_test_category ORDER BY name ASC`, (err, res: any) => {
        if (err) {
          reject(
            new DatabaseQueryError("Error Retrieving all Test Categories")
          );
        } else {
          resolve(res);
        }
      });
    });
  }

  static async findByPatient(patient_id: number): Promise<TestCategory | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_test_category WHERE patient_id = ${patient_id}`,
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
