import { State } from "./types";

export const initialState: State = {
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
    testResult: [],
}