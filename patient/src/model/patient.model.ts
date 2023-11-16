import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Patient {
  id: number;
  fullName: string;
  sex: number;
  age: number;
  dateOfVisit: Date | string | null;
  address: string;
  email: string;
  phone: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(patient: {
    id: number;
    fullName: string;
    sex: number;
    age: number;
    dateOfVisit: Date | string | null;
    address: string;
    email: string;
    phone: string;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = patient.id;
    this.fullName = patient.fullName;
    this.sex = patient.sex;
    this.age = patient.age;
    this.dateOfVisit = patient.dateOfVisit;
    this.address = patient.address;
    this.email = patient.email;
    this.phone = patient.phone;
    this.status = patient.status;
    this.created_at = patient.created_at;
    this.updated_at = patient.updated_at;
  }

  static create(
    newPatient: Patient,
    result: (err: Error | null, patient: Patient | null) => void
  ): void {
    sql.query("INSERT INTO patient SET ? ", newPatient, (err, res) => {
      if (err) {
        throw new DatabaseQueryError("Error Inserting Data");
      }

      result(null, { ...newPatient });
    });
  }

  static retrieve(
    result: (err: Error | null, patient: Patient | null) => void
  ): void {
    sql.query("SELECT * FROM patient", (err, res: Patient) => {
      if (err) {
        throw new DatabaseQueryError("Error Retrieving Data");
      }

      result(null, res);
    });
  }

  static findOneByFullName(
    fullName: string,
    result: (err: Error | null, patient: Patient | null) => void
  ): void {
    sql.query(
      `SELECT * FROM patient WHERE fullName = '${fullName}'`,
      (err, res: any) => {
        if (err) {
          throw new DatabaseQueryError("Error Retrieving Specific Patient");
        }

        result(null, res[0].id);
      }
    );
  }
}
