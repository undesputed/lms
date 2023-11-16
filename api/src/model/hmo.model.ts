import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Hmo {
  id: number | null;
  hmo_name: string;
  contact_person: string;
  email_address: string;
  contact_number: string;
  link_to_rates: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(hmo: {
    id: number | null;
    hmo_name: string;
    contact_person: string;
    email_address: string;
    contact_number: string;
    link_to_rates: string;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = hmo.id;
    this.hmo_name = hmo.hmo_name;
    this.contact_person = hmo.contact_person;
    this.email_address = hmo.email_address;
    this.contact_number = hmo.contact_number;
    this.link_to_rates = hmo.link_to_rates;
    this.status = hmo.status;
    this.created_at = hmo.created_at;
    this.updated_at = hmo.updated_at;
  }

  static async create(newHmo: Hmo): Promise<Hmo | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_hmo SET ?";

      sql.query(query, [newHmo], (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error creating new Baseline test"));
        } else {
          resolve(res.insertId);
        }
      });
    });
  }

  static async retrieve(): Promise<Hmo | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_hmo`, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Referrals"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async retrieveById(id: number | string): Promise<Hmo | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_hmo WHERE id = ${id} `, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Referrals"));
        } else {
          resolve(res.length > 0 ? res[0] : null);
        }
      });
    });
  }
}
