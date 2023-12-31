import express, { Request, Response } from "express";
import TestResult from "../../model/testResult.model";

const router = express.Router();

router.put("/api/testResult", async (req: Request, res: Response) => {
  const {
    id,
    test_id,
    patient_id,
    wbc,
    rbc,
    hgb,
    hct,
    plt,
    neu,
    lym,
    mon,
    eos,
    bas,
    total,
    mcv,
    mch,
    mchc,
    color,
    transparency,
    leukocyte,
    nitrite,
    urobilinogen,
    protein,
    ph,
    blood,
    spGravity,
    ketone,
    bilirubin,
    glucose,
    bacteria,
    epithelialCells,
    amorphousUrate,
    mucusThreads,
    consistency,
    fatGlobules,
    ascarisL,
    trichurisTrichuria,
    hookworm,
    schistosoma,
    entamoebaHistolyticaTroph,
    entamoebaHistolyticaCyst,
    entamoebaColi,
    cholesterol,
    triglycerides,
    hdlCholesterol,
    ldlCholesterol,
    creatinine,
    potassium,
    totalCalcium,
    bun,
    hbsAgScreening,
    hepatitisCAntibody,
    sgptAlt,
    sgotAst,
    bua,
    cardiacTroponinI,
    prostateSpecificAntigen,
    hemoglobinA1C,
    pregnancyTest,
    bloodType,
    rh,
    ns1,
    igM,
    igG,
    rprTiterWithDilution,
    vdrl,
    fasting,
    firstHour,
    secondHour,
    urinePregnancyTest,
    sodium,
    chloride,
    ionizedCalcium,
    bleedingTime,
    clottingTime,
    testDate,
    others,
    remarks,
    status,
    created_at,
    updated_at,
  } = req.body;

  const updatedTestResult = new TestResult({
    id,
    test_id,
    patient_id,
    wbc,
    rbc,
    hgb,
    hct,
    plt,
    neu,
    lym,
    mon,
    eos,
    bas,
    total,
    mcv,
    mch,
    mchc,
    color,
    transparency,
    leukocyte,
    nitrite,
    urobilinogen,
    protein,
    ph,
    blood,
    spGravity,
    ketone,
    bilirubin,
    glucose,
    bacteria,
    epithelialCells,
    amorphousUrate,
    mucusThreads,
    consistency,
    fatGlobules,
    ascarisL,
    trichurisTrichuria,
    hookworm,
    schistosoma,
    entamoebaHistolyticaTroph,
    entamoebaHistolyticaCyst,
    entamoebaColi,
    cholesterol,
    triglycerides,
    hdlCholesterol,
    ldlCholesterol,
    creatinine,
    potassium,
    totalCalcium,
    bun,
    hbsAgScreening,
    hepatitisCAntibody,
    sgptAlt,
    sgotAst,
    bua,
    cardiacTroponinI,
    prostateSpecificAntigen,
    hemoglobinA1C,
    pregnancyTest,
    bloodType,
    rh,
    ns1,
    igM,
    igG,
    rprTiterWithDilution,
    vdrl,
    fasting,
    firstHour,
    secondHour,
    urinePregnancyTest,
    sodium,
    chloride,
    ionizedCalcium,
    bleedingTime,
    clottingTime,
    testDate: new Date(testDate).toISOString().split("T")[0],
    others,
    remarks,
    status,
    created_at: new Date(created_at).toISOString().split("T")[0],
    updated_at: new Date().toISOString().split("T")[0],
  });

  try {
    const update: any = await TestResult.update(updatedTestResult);
    res.status(201).send(update);
  } catch (err) {
    console.log(err);
  }
});

export { router as updateTestResult };
