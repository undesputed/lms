import { State } from "./types";

export const initialState: State = {
  openAddModal: false,
  openEditModa: false,
  openViewModal: false,
  testField: [],
  field: {
    test_name: "",
    unit: "",
    maleRefRange: "",
    femaleRefRange: "",
    refRange: "",
    desirableRefRange: "",
    borderlineRefRange: "",
    highRiskRefRange: "",
    other: "",
    status: 1,
    created_at: "",
    updated_at: "",
    id: 0,
  },
};
