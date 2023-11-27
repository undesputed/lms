import { State } from "./types";

export const initialState: State = {
  openModal: false,
  addTestModal: false,
  previewModal: false,
  patient: {
    id: null,
    fullName: "",
    sex: 0,
    birthdate: "2000-01-01",
    dateOfVisit: new Date().toISOString().split("T")[0],
    address: "",
    email: "",
    phone: "",
    status: 0,
    created_at: new Date().toISOString().split("T")[0],
    updated_at: null,
    lms_company_id: null,
    lms_referral_id: null,
    lms_hmo_id: null,
  },
  result: {
    id: 0,
    test_id: null,
    patient_id: null,
    wbc: "",
    rbc: "",
    hgb: 0,
    hct: 0,
    plt: 0,
    neu: 0,
    lym: 0,
    mon: 0,
    eos: 0,
    bas: 0,
    total: 0,
    mcv: 0,
    mch: 0,
    mchc: 0,
    color: "",
    transparency: "",
    leukocyte: "",
    nitrite: "",
    urobilinogen: "",
    protein: "",
    ph: 0,
    blood: "",
    spGravity: 0,
    ketone: "",
    bilirubin: "",
    glucose: 0,
    bacteria: "",
    epithelialCells: "",
    amorphousUrate: "",
    mucusThreads: "",
    consistency: "",
    fatGlobules: "",
    ascarisL: "",
    trichurisTrichuria: "",
    hookworm: "",
    schistosoma: "",
    entamoebaHistolyticaTroph: "",
    entamoebaHistolyticaCyst: "",
    entamoebaColi: "",
    cholesterol: 0,
    triglycerides: 0,
    hdlCholesterol: 0,
    ldlCholesterol: 0,
    creatinine: 0,
    potassium: 0,
    totalCalcium: 0,
    bun: 0,
    hbsAgScreening: 0,
    hepatitisCAntibody: 0,
    sgptAlt: 0,
    sgotAst: 0,
    bua: 0,
    cardiacTroponinI: "",
    prostateSpecificAntigen: "",
    hemoglobinA1C: 0,
    pregnancyTest: "",
    bloodType: "",
    rh: "",
    ns1: "",
    igM: "",
    igG: "",
    rprTiterWithDilution: "",
    vdrl: "",
    fasting: 0,
    firstHour: 0,
    secondHour: 0,
    urinePregnancyTest: "",
    sodium: "",
    chloride: "",
    ionizedCalcium: "",
    bleedingTime: "",
    clottingTime: "",
    testDate: "",
    others: "",
    remarks: "",
    status: 0,
    created_at: "",
    updated_at: new Date().toISOString().split("T")[0],
  },
  testCategory: [],
  testResult: [],
  addedTests: [],
  filteredTests: [],
  total: 0,
  testType: "",
  test_id: 0,
  patientResult: [],
  container: []
};
