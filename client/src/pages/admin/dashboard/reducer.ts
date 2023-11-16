import { Action, State } from "./types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setValue":
      return {
        ...state,
        value: action.payload,
      };
    case "handleOpen":
      return {
        ...state,
        open: action.payload,
      };
    case "openEditPatient":
      return {
        ...state,
        editPatient: action.payload,
      };
    case "setPatient":
      if (action.name === "birthdate") {
        return {
          ...state,
          age: calculateAge(action.value),
          patient: {
            ...state.patient,
            [action.name]: action.value,
          },
        };
      } else {
        return {
          ...state,
          patient: {
            ...state.patient,
            [action.name]: action.value,
          },
        };
      }
    case "setPatients":
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };
    case "onChangeUpdateProfile":
      if (action.name === "birthdate") {
        return {
          ...state,
          updateProfile: {
            ...state.updateProfile,
            [action.name]: action.value,
          },
        };
      } else {
        return {
          ...state,
          updateProfile: {
            ...state.updateProfile,
            [action.name]: action.value,
          },
        };
      }
    case "setUpdateProfile":
      return {
        ...state,
        updateProfile: action.payload,
      };
    case "setChecked":
      return {
        ...state,
        checkedCategory: action.payload,
      };
    case "setAddedTest":
      return {
        ...state,
        addedTests: [...state.addedTests, action.payload],
      };
    case "updateAddedTest":
      return {
        ...state,
        addedTests: action.payload,
      };
    case "removeTest":
      return {
        ...state,
        addedTests: action.payload,
      };
    case "setRemovedChecked":
      return {
        ...state,
        onRemoveCheckedCat: action.payload,
      };
  }
};

function calculateAge(dateOfBirth: string | Date | null): number {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
}
