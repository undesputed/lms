export class ec_care_results {
    id: number | null;
    result: string | null;
    lms_patient_id: number;
    lms_test_id: number;
    testDate: Date | string | null;
    status: number;
    created_at: Date | string | null;
    updated_at: Date | string | null;

    constructor(init: Partial<ec_care_results>) {
        this.id = init.id;
        this.result = init.result;
        this.lms_patient_id = init.lms_patient_id;
        this.lms_test_id = init.lms_test_id;
        this.testDate = init.testDate;
        this.status = init.status;
        this.created_at = init.created_at;
        this.updated_at = init.updated_at;
    }
}
