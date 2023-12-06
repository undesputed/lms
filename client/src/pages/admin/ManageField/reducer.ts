import { State, Action } from "./types";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setOpenAddModal":
      return {
        ...state,
        openAddModal: action.payload,
      };
    case "setOpenEditModal":
      return {
        ...state,
        openEditModa: action.payload,
      };
    case "setOpenViewModal":
      return {
        ...state,
        openViewModal: action.payload,
      };
    case "setTestField":
      return {
        ...state,
        testField: action.payload,
      };
    case "setField":
      return {
        ...state,
        field: {
          ...state.field,
          [action.name]: action.value,
        },
      };
    case "setFieldById":
      return {
        ...state,
        field: action.payload,
      };
  }
};
