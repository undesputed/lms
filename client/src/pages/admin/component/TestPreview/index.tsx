import React from "react";
import CbcPreviewTable from "../Cbc/previewTable";
import { ec_care_testResult } from "../../../../entity/ec_care_testResult";
import UrinalysisPreviewTable from "../Urinalysis/previewTable";
import StoolPreviewTable from "../Stool/previewTable";
import CCFastingPreviewTable from "../CCFasting/previewTable";
import CTBTPreviewTable from "../CTBT/previewTable";
import ECGPreviewTable from "../ECG/previewTable";

interface TestPreviewProps {
  testType: string;
  onClose?: () => void;
  testResult?: ec_care_testResult;
}

const TestPreview: React.FC<TestPreviewProps> = ({
  testType,
  onClose,
  testResult,
}) => {
  switch (testType) {
    case "CBC":
      return <CbcPreviewTable onClose={onClose} testResult={testResult} />;
    case "Urinalysis":
      return (
        <UrinalysisPreviewTable onClose={onClose} testResult={testResult} />
      );
    case "Stool Exam":
      return <StoolPreviewTable onClose={onClose} testResult={testResult} />;
    case "FBS (Fasting Blood Sugar)":
      return (
        <CCFastingPreviewTable onClose={onClose} testResult={testResult} />
      );
    case "CTBT":
      return <CTBTPreviewTable onClose={onClose} testResult={testResult} />;
    case "ECG":
      return <ECGPreviewTable onClose={onClose} testResult={testResult} />;
    default:
      return <>Hello world</>;
  }
};

export default TestPreview;
