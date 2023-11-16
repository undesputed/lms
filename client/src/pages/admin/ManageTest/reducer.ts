import { State, Action } from "./types";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setTestCategory":
      return {
        ...state,
        testCategory: action.payload,
      };
    case "setTestCategoryField":
      return {
        ...state,
        testCategoryField: action.payload,
      };
    case "setTestField":
      return {
        ...state,
        testField: action.payload,
      };
    case "setOpenPreviewModal":
      return {
        ...state,
        openPreviewModal: action.payload,
      };
    case "setOpenEditModal":
      return {
        ...state,
        openEditModal: action.payload,
      };
    case "setTestCategoryId":
      return {
        ...state,
        testCategoryId: action.payload,
      };
  }
};
