export class ec_care_hematology {
  id: number | null;
  patient_id: number;
  wbc: string;
  rbc: string;
  hgb: string;
  hct: string;
  plt: string;
  neu: number;
  lym: number;
  mon: number;
  eos: number;
  bas: number;
  mcv: number;
  mch: number;
  mchc: number;
  remarks: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(hematology: Partial<ec_care_hematology>) {
    this.id = hematology.id;
    this.patient_id = hematology.patient_id;
    this.wbc = hematology.wbc;
    this.rbc = hematology.rbc;
    this.hgb = hematology.hgb;
    this.hct = hematology.hct;
    this.plt = hematology.plt;
    this.neu = hematology.neu;
    this.lym = hematology.lym;
    this.mon = hematology.mon;
    this.eos = hematology.eos;
    this.bas = hematology.bas;
    this.mcv = hematology.mcv;
    this.mch = hematology.mch;
    this.mchc = hematology.mchc;
    this.remarks = hematology.remarks;
    this.status = hematology.status;
    this.created_at = hematology.created_at;
    this.updated_at = hematology.updated_at;
  }

  static declare(json): ec_care_hematology {
    return new ec_care_hematology(json);
  }
}
