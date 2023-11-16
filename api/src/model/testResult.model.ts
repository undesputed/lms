import sql from "../db/db";
import { DatabaseQueryError } from "../errors/dbQueryError";
import Patient from "./patient.model";
import TestCategory from "./testCategory.model";

export default class TestResult {
  id: number | null;
  test_id: TestCategory | null;
  patient_id: Patient | null;
  wbc: string | null;
  rbc: string | null;
  hgb: number | null;
  hct: number | null;
  plt: number | null;
  neu: number | null;
  lym: number | null;
  mon: number | null;
  eos: number | null;
  bas: number | null;
  total: number | null;
  mcv: number | null;
  mch: number | null;
  mchc: number | null;
  color: string | null;
  transparency: string | null;
  leukocyte: string | null;
  nitrite: string | null;
  urobilinogen: string | null;
  protein: string | null;
  ph: number | null;
  blood: string | null;
  spGravity: number | null;
  ketone: string | null;
  bilirubin: string | null;
  glucose: string | null;
  bacteria: string | null;
  epithelialCells: string | null;
  amorphousUrate: string | null;
  mucusThreads: string | null;
  consistency: string | null;
  fatGlobules: string | null;
  ascarisL: string | null;
  trichurisTrichuria: string | null;
  hookworm: string | null;
  schistosoma: string | null;
  entamoebaHistolyticaTroph: string | null;
  entamoebaHistolyticaCyst: string | null;
  entamoebaColi: string | null;
  cholesterol: number | null;
  triglycerides: number | null;
  hdlCholesterol: number | null;
  ldlCholesterol: number | null;
  creatinine: number | null;
  potassium: number | null;
  totalCalcium: number | null;
  bun: number | null;
  hbsAgScreening: number | null;
  hepatitisCAntibody: number | null;
  sgptAlt: number | null;
  sgotAst: number | null;
  bua: number | null;
  cardiacTroponinI: string | null;
  prostateSpecificAntigen: string | null;
  hemoglobinA1C: number | null;
  pregnancyTest: string | null;
  bloodType: string | null;
  rh: string | null;
  ns1: string | null;
  igM: string | null;
  igG: string | null;
  rprTiterWithDilution: string | null;
  vdrl: string | null;
  fasting: number | null;
  firstHour: number | null;
  secondHour: number | null;
  urinePregnancyTest: string | null;
  sodium: string | null;
  chloride: string | null;
  ionizedCalcium: string | null;
  bleedingTime: string | null;
  clottingTime: string | null;
  testDate: Date | string | null;
  others: string | null;
  remarks: string | null;
  status: number | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(test: {
    id: number | null;
    test_id: TestCategory | null;
    patient_id: Patient | null;
    wbc: string | null;
    rbc: string | null;
    hgb: number | null;
    hct: number | null;
    plt: number | null;
    neu: number | null;
    lym: number | null;
    mon: number | null;
    eos: number | null;
    bas: number | null;
    total: number | null;
    mcv: number | null;
    mch: number | null;
    mchc: number | null;
    color: string | null;
    transparency: string | null;
    leukocyte: string | null;
    nitrite: string | null;
    urobilinogen: string | null;
    protein: string | null;
    ph: number | null;
    blood: string | null;
    spGravity: number | null;
    ketone: string | null;
    bilirubin: string | null;
    glucose: string | null;
    bacteria: string | null;
    epithelialCells: string | null;
    amorphousUrate: string | null;
    mucusThreads: string | null;
    consistency: string | null;
    fatGlobules: string | null;
    ascarisL: string | null;
    trichurisTrichuria: string | null;
    hookworm: string | null;
    schistosoma: string | null;
    entamoebaHistolyticaTroph: string | null;
    entamoebaHistolyticaCyst: string | null;
    entamoebaColi: string | null;
    cholesterol: number | null;
    triglycerides: number | null;
    hdlCholesterol: number | null;
    ldlCholesterol: number | null;
    creatinine: number | null;
    potassium: number | null;
    totalCalcium: number | null;
    bun: number | null;
    hbsAgScreening: number | null;
    hepatitisCAntibody: number | null;
    sgptAlt: number | null;
    sgotAst: number | null;
    bua: number | null;
    cardiacTroponinI: string | null;
    prostateSpecificAntigen: string | null;
    hemoglobinA1C: number | null;
    pregnancyTest: string | null;
    bloodType: string | null;
    rh: string | null;
    ns1: string | null;
    igM: string | null;
    igG: string | null;
    rprTiterWithDilution: string | null;
    vdrl: string | null;
    fasting: number | null;
    firstHour: number | null;
    secondHour: number | null;
    urinePregnancyTest: string | null;
    sodium: string | null;
    chloride: string | null;
    ionizedCalcium: string | null;
    bleedingTime: string | null;
    clottingTime: string | null;
    testDate: Date | string | null;
    others: string | null;
    remarks: string | null;
    status: number | null;
    created_at: Date | string | null;
    updated_at: Date | string | null;
  }) {
    this.id = test.id;
    this.test_id = test.test_id;
    this.patient_id = test.patient_id;
    this.wbc = test.wbc;
    this.rbc = test.rbc;
    this.hgb = test.hgb;
    this.hct = test.hct;
    this.plt = test.plt;
    this.neu = test.neu;
    this.lym = test.lym;
    this.mon = test.mon;
    this.eos = test.eos;
    this.bas = test.bas;
    this.total = test.total;
    this.mcv = test.mcv;
    this.mch = test.mch;
    this.mchc = test.mchc;
    this.color = test.color;
    this.transparency = test.transparency;
    this.leukocyte = test.leukocyte;
    this.nitrite = test.nitrite;
    this.urobilinogen = test.urobilinogen;
    this.protein = test.protein;
    this.ph = test.ph;
    this.blood = test.blood;
    this.spGravity = test.spGravity;
    this.ketone = test.ketone;
    this.bilirubin = test.bilirubin;
    this.glucose = test.glucose;
    this.bacteria = test.bacteria;
    this.epithelialCells = test.epithelialCells;
    this.amorphousUrate = test.amorphousUrate;
    this.mucusThreads = test.mucusThreads;
    this.consistency = test.consistency;
    this.fatGlobules = test.fatGlobules;
    this.ascarisL = test.ascarisL;
    this.trichurisTrichuria = test.trichurisTrichuria;
    this.hookworm = test.hookworm;
    this.schistosoma = test.schistosoma;
    this.entamoebaHistolyticaTroph = test.entamoebaHistolyticaTroph;
    this.entamoebaHistolyticaCyst = test.entamoebaHistolyticaCyst;
    this.entamoebaColi = test.entamoebaColi;
    this.cholesterol = test.cholesterol;
    this.triglycerides = test.triglycerides;
    this.hdlCholesterol = test.hdlCholesterol;
    this.ldlCholesterol = test.ldlCholesterol;
    this.creatinine = test.creatinine;
    this.potassium = test.potassium;
    this.totalCalcium = test.totalCalcium;
    this.bun = test.bun;
    this.hbsAgScreening = test.hbsAgScreening;
    this.hepatitisCAntibody = test.hepatitisCAntibody;
    this.sgptAlt = test.sgptAlt;
    this.sgotAst = test.sgotAst;
    this.bua = test.bua;
    this.cardiacTroponinI = test.cardiacTroponinI;
    this.prostateSpecificAntigen = test.prostateSpecificAntigen;
    this.hemoglobinA1C = test.hemoglobinA1C;
    this.pregnancyTest = test.pregnancyTest;
    this.bloodType = test.bloodType;
    this.rh = test.rh;
    this.ns1 = test.ns1;
    this.igM = test.igM;
    this.igG = test.igG;
    this.rprTiterWithDilution = test.rprTiterWithDilution;
    this.vdrl = test.vdrl;
    this.fasting = test.fasting;
    this.firstHour = test.firstHour;
    this.secondHour = test.secondHour;
    this.urinePregnancyTest = test.urinePregnancyTest;
    this.sodium = test.sodium;
    this.chloride = test.chloride;
    this.ionizedCalcium = test.ionizedCalcium;
    this.bleedingTime = test.bleedingTime;
    this.clottingTime = test.clottingTime;
    this.testDate = test.testDate;
    this.others = test.others;
    this.remarks = test.remarks;
    this.status = test.status;
    this.created_at = test.created_at;
    this.updated_at = test.updated_at;
  }
  static async create(newTest: TestResult): Promise<TestResult | null> {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lms_test_results SET ?";

      sql.query(query, [newTest], (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Creating new tests"));
        } else {
          resolve(res);
        }
      });
    });
  }

  static async update(
    updatedTestResult: TestResult
  ): Promise<TestResult | null> {
    return new Promise((resolve, reject) => {
      const query = "UPDATE lms_test_results SET ? WHERE id = ?";
      const { id, ...updatedValues } = updatedTestResult;

      sql.query(
        query,
        [updatedValues, updatedTestResult.id],
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Updating Test Result"));
          } else {
            resolve(res.affectedRows > 0 ? updatedTestResult : null);
          }
        }
      );
    });
  }

  static async delete(id: number | string): Promise<any | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `DELETE FROM lms_test_results WHERE id = ${id}`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Deleting Test Result"));
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  static async findBydId(id: number | string): Promise<TestResult | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_test_results WHERE id = ${id}`,
        (err, res: any) => {
          if (err) {
            console.log(err);
            reject(new DatabaseQueryError("Error Retreiving Results"));
          } else {
            resolve(res.length > 0 ? res[0] : null);
          }
        }
      );
    });
  }

  static async findByPatient(
    patient_id: number | string
  ): Promise<TestResult | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT * FROM lms_test_results WHERE patient_id = ${patient_id}`,
        (err, res: any) => {
          if (err) {
            reject(new DatabaseQueryError("Error Retrieving Test"));
          } else {
            resolve(res.length ? res : null);
          }
        }
      );
    });
  }

  static async findTotalByPatientId(
    patient_id: number | string
  ): Promise<{ total: number | string } | null> {
    return new Promise((resolve, reject) => {
      sql.query(
        `SELECT SUM(lms_test_category.price) AS total FROM lms_test_results 
        INNER JOIN lms_test_category ON lms_test_category.id = lms_test_results.test_id
        WHERE lms_test_results.patient_id = ${patient_id}`,
        (err, res: any) => {
          if (err) {
            reject(new DatabaseQueryError("Error Retrieving Total Price"));
          } else {
            resolve(res.length > 0 ? res[0] : null);
          }
        }
      );
    });
  }

  static async fetchAll(): Promise<TestResult | null> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM lms_test_results`, (err, res: any) => {
        if (err) {
          reject(new DatabaseQueryError("Error Retrieving Test Results"));
        } else {
          resolve(res);
        }
      });
    });
  }
}
