import { ec_care_test_category } from "./ec_care_test_category";
import { ec_care_test_field } from "./ec_care_test_field";

export class ec_care_test_field_category_field {
  id: number | null;
  test_category_id: ec_care_test_category | null;
  test_field_id: ec_care_test_field | null;
  status: number | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(init: Partial<ec_care_test_field_category_field>) {
    this.id = init.id;
    this.test_category_id = init.test_category_id;
    this.test_field_id = init.test_field_id;
    this.status = init.status;
    this.created_at = init.created_at;
    this.updated_at = init.updated_at;
  }

  static declare(json): ec_care_test_field_category_field {
    return new ec_care_test_field_category_field(json);
  }
}
