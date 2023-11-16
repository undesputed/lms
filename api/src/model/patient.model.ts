import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Patient {
  id: number | null;
  fullName: string;
  sex: number;
  birthdate: Date | string | null;
  dateOfVisit: Date | string | null;
  address: string;
  email: string;
  phone: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;
  lms_company_id: number | null;
  lms_referral_id: number | null;
  lms_hmo_id: number | null;

  constructor(patient: {
    id: number | null;
    fullName: string;
    sex: number;
    birthdate: Date | string | null;
    dateOfVisit: Date | string | null;
    address: string;
    email: string;
    phone: string;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
    lms_company_id: number | null;
    lms_referral_id: number | null;
    lms_hmo_id: number | null;
  }) {
    this.id = patient.id;
    this.fullName = patient.fullName;
    this.sex = patient.sex;
    this.birthdate = patient.birthdate;
    this.dateOfVisit = patient.dateOfVisit;
    this.address = patient.address;
    this.email = patient.email;
    this.phone = patient.phone;
    this.status = patient.status;
    this.created_at = patient.created_at;
    this.updated_at = patient.updated_at;
    this.lms_company_id = patient.lms_company_id;
    this.lms_referral_id = patient.lms_referral_id;
    this.lms_hmo_id = patient.lms_hmo_id;
  }

  static async create(newPatient: Patient): Promise<Patient | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_patient SET ?";

      sql.query(query, [newPatient], (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Creating new Patient"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async update(updatedPatient: Patient): Promise<Patient | null> {
    return new Promise((resolve, reject) => {
      const query = "UPDATE lms_patient SET ? where id = ?";
      const { id, ...updatedValues } = updatedPatient;

      sql.query(query, [updatedValues, updatedPatient.id], (err, res: any) => {
        if (err) {
          console.log(err);
          reject(new DatabaseQueryError("Error Updated Patient"));
        } else {
          resolve(res.affectedRows > 0 ? updatedPatient : null);
        }
      });
    });
  }

  static async findByStatus(): Promise<Patient | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_patient WHERE status = 0 ORDER BY id DESC`,
        (err, res: any) => {
          if (err) {
            reject(new DatabaseQueryError("Error Retrieving Data"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  static async findById(patient_id: number | string): Promise<Patient | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_patient WHERE id = ${patient_id} AND status = 0`,
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

  static async findOneByFullName(fullName: string): Promise<Patient | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_patient WHERE fullName = '${fullName}'`,
        (err, res: any) => {
          if (err) {
            reject(new DatabaseQueryError("Error Retrieving Specific Patient"));
          } else {
            resolve(res.length ? res[0] : null);
          }
        }
      );
    });
  }
}
