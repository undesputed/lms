import { State, Action } from "./types";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setOpenModal":
      return {
        ...state,
        openModal: action.payload,
      };
    case "setAddTestModal":
      return {
        ...state,
        addTestModal: action.payload,
      };
    case "setPreviewModal":
      return {
        ...state,
        previewModal: action.payload,
      };
    case "setTestResult":
      return {
        ...state,
        testResult: action.payload,
      };
    case "setTestCategory":
      return {
        ...state,
        testCategory: action.payload,
      };
    case "setPatient":
      return {
        ...state,
        patient: action.payload,
      };
    case "setTotal":
      return {
        ...state,
        total: action.payload,
      };
    case "setTestType":
      return {
        ...state,
        testType: action.payload,
      };
    case "setAddedTests":
      return {
        ...state,
        addedTests: [...state.addedTests, action.payload],
      };
    case "setFilteredTests":
      return {
        ...state,
        filteredTests: action.payload,
      };
    case "setResultOnChange":
      return {
        ...state,
        result: {
          ...state.result,
          [action.name]: action.value,
        },
      };
    case "setResult":
      return {
        ...state,
        result: action.payload,
      };
  }
};
