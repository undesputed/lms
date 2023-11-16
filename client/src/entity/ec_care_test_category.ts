export class ec_care_test_category {
  id: number | null;
  name: number;
  description: string;
  price: number;
  type: string;
  table_name: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(testCategory: Partial<ec_care_test_category>) {
    this.id = testCategory.id;
    this.name = testCategory.name;
    this.description = testCategory.description;
    this.price = testCategory.price;
    this.type = testCategory.type;
    this.table_name = testCategory.table_name;
    this.status = testCategory.status;
    this.created_at = testCategory.created_at;
    this.updated_at = testCategory.updated_at;
  }
  static declare(json): ec_care_test_category {
    return new ec_care_test_category(json);
  }
}
