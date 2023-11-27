export class ec_care_tests {
  id: number | null;
  test_id: number;
  field_id: number | null;
  testDate: Date | string | null;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(init: Partial<ec_care_tests>) {
    this.id = init.id;
    this.test_id = init.test_id;
    this.field_id = init.field_id
    this.testDate = init.testDate;
    this.status = init.status;
    this.created_at = init.created_at;
    this.updated_at = init.updated_at;
  }

  static declare(json): ec_care_tests {
    return new ec_care_tests(json);
  }
}
