export class ec_care_test_field {
  id: number | null;
  test_name: string;
  unit: string;
  maleRefRange: string;
  femaleRefRange: string;
  refRange: string;
  desirableRefRange: string;
  borderlineRefRange: string;
  highRiskRefRange: string;
  other: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(testField: Partial<ec_care_test_field>) {
    this.id = testField.id;
    this.test_name = testField.test_name;
    this.unit = testField.unit;
    this.maleRefRange = testField.maleRefRange;
    this.femaleRefRange = testField.femaleRefRange;
    this.refRange = testField.refRange;
    this.desirableRefRange = testField.desirableRefRange;
    this.borderlineRefRange = testField.borderlineRefRange;
    this.highRiskRefRange = testField.highRiskRefRange;
    this.highRiskRefRange = testField.highRiskRefRange;
    this.other = testField.other;
    this.status = testField.status;
    this.created_at = testField.created_at;
    this.updated_at = testField.updated_at;
  }

  static declare(json): ec_care_test_field {
    return new ec_care_test_field(json);
  }
}
