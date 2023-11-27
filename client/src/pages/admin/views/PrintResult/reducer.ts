import { State, Action } from "./types";

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "setPatient":
            return {
                ...state,
                patient: action.payload
            }
        case "setTestResult":
            return {
                ...state,
                testResult: action.payload
            }
    }
}