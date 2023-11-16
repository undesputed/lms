import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Company {
  id: number | null;
  patient_id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(company: {
    id: number | null;
    patient_id: number;
    name: string;
    address: string;
    email: string;
    phone: string;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = company.id;
    this.patient_id = company.patient_id;
    this.name = company.name;
    this.address = company.address;
    this.email = company.email;
    this.phone = company.phone;
    this.status = company.status;
    this.created_at = company.created_at;
    this.updated_at = company.updated_at;
  }

  static async create(newCompany: Company): Promise<Company | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_company SET ?";

      sql.query(query, [newCompany], (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error creating new Baseline test"));
        } else {
          resolve(res.insertId);
        }
      });
    });
  }

  static async findByPatient(patient_id: number): Promise<Company | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_company WHERE patient_id = ${patient_id}`,
        (err, res: any) => {
          if (err) {
            reject(new DatabaseQueryError("Error retrieving Baseline"));
          } else {
            resolve(res.length ? res[0] : null);
          }
        }
      );
    });
  }
}
