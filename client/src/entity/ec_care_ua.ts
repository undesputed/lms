export class ec_care_ua {
  id: number | null;
  patient_id: number;
  color: string;
  transparency: string;
  leukocyte: string;
  nitrite: string;
  urobilinogen: string;
  protein: string;
  ph: string;
  blood: string;
  spGravity: string;
  ketone: string;
  bilirubin: string;
  glucose: string;
  wbc: string;
  rbc: string;
  bacteria: string;
  epithelialCells: string;
  amorphousUrate: string;
  mucusThreds: string;
  others: string;
  remarks: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(ua: Partial<ec_care_ua>) {
    this.id = ua.id;
    this.patient_id = ua.patient_id;
    this.color = ua.color;
    this.transparency = ua.transparency;
    this.leukocyte = ua.leukocyte;
    this.nitrite = ua.nitrite;
    this.urobilinogen = ua.urobilinogen;
    this.protein = ua.protein;
    this.ph = ua.ph;
    this.blood = ua.blood;
    this.spGravity = ua.spGravity;
    this.ketone = ua.ketone;
    this.bilirubin = ua.bilirubin;
    this.glucose = ua.glucose;
    this.wbc = ua.wbc;
    this.rbc = ua.rbc;
    this.bacteria = ua.bacteria;
    this.epithelialCells = ua.epithelialCells;
    this.amorphousUrate = ua.amorphousUrate;
    this.mucusThreds = ua.mucusThreds;
    this.others = ua.others;
    this.remarks = ua.remarks;
    this.status = ua.status;
    this.created_at = ua.created_at;
    this.updated_at = ua.updated_at;
  }

  static declare(json): ec_care_ua {
    return new ec_care_ua(json);
  }
}
