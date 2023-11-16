export class ec_care_hmo {
  id: number | null;
  hmo_name: string;
  contact_person: string;
  email_address: string;
  contact_number: string;
  link_to_rates: string;
  status: number;
  created_at: Date | string | null;
  updated_at: Date | string | null;

  constructor(hmo: Partial<ec_care_hmo>) {
    this.id = hmo.id;
    this.hmo_name = hmo.hmo_name;
    this.contact_person = hmo.contact_person;
    this.email_address = hmo.email_address;
    this.contact_number = hmo.contact_number;
    this.link_to_rates = hmo.link_to_rates;
    this.status = hmo.status;
    this.created_at = hmo.created_at;
    this.updated_at = hmo.updated_at;
  }

  static declare(json): ec_care_hmo {
    return new ec_care_hmo(json);
  }
}
