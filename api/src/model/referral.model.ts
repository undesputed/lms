import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";

export default class Referral {
  id: number | null;
  surname: string;
  givenName: string;
  middleName: string;
  specialization: string;
  prc_no: string;
  philhealth_no: string;
  tin_no: string;
  room_no: number;
  schedule: string;
  phone: string;
  email: string;
  price: number;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(referral: {
    id: number | null;
    surname: string;
    givenName: string;
    middleName: string;
    specialization: string;
    prc_no: string;
    philhealth_no: string;
    tin_no: string;
    room_no: number;
    schedule: string;
    phone: string;
    email: string;
    price: number;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = referral.id;
    this.surname = referral.surname;
    this.givenName = referral.givenName;
    this.middleName = referral.middleName;
    this.specialization = referral.specialization;
    this.prc_no = referral.prc_no;
    this.philhealth_no = referral.philhealth_no;
    this.tin_no = referral.tin_no;
    this.room_no = referral.room_no;
    this.schedule = referral.schedule;
    this.phone = referral.phone;
    this.email = referral.email;
    this.price = referral.price;
    this.status = referral.status;
    this.created_at = referral.created_at;
    this.updated_at = referral.updated_at;
  }

  static async create(newReferral: Referral): Promise<Referral | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_referral SET ?";

      sql.query(query, [newReferral], (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error creating new Baseline test"));
        } else {
          resolve(res.insertId);
        }
      });
    });
  }

  static async retrieve(): Promise<Referral | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_referral`, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Referrals"));
        } else {
          resolve(res);
        }
      });
    });
  }
}
