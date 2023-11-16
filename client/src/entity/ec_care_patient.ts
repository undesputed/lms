import { ec_care_hmo } from "./ec_care_hmo";
import { ec_care_referral } from "./ec_care_referral";

export class ec_care_patient {
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
  lms_company_id: ec_care_referral | null;
  lms_referral_id: ec_care_referral | null;
  lms_hmo_id: ec_care_hmo | null;

  constructor(patient: Partial<ec_care_patient>) {
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

  static declare(json): ec_care_patient {
    return new ec_care_patient(json);
  }
}
