import { State, Action } from "./types";

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "setTestCategory":
            return {
                ...state,
                testCategory: {
                    ...state.testCategory,
                    [action.name]: action.value
                }
            }
        case "setTestField":
            return {
                ...state,
                testField: {
                    ...state.testField,
                    [action.name]: action.value
                }
            }
        case "setSelectedFields":
            return {
                ...state,
                selectedFields: action.payload
            }
    }
}