import { State } from "./types";

export const initialState: State = {
  testCategory: {
    id: null,
    name: "",
    description: "",
    price: 0,
    type: "",
    table_name: null,
    status: 0,
    created_at: new Date().toISOString().split("T")[0],
    updated_at: null,
  },
  testField: [],
  selectedFields: [],
};
