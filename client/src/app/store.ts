import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import PatientReducer from "../reducers/patient/patientSlice";
import ReferralReducer from "../reducers/referral/referralSlice";
import HmoReducer from "../reducers/hmo/hmoSlice";
import TestCategoryReducer from "../reducers/testCategory/testCategory";
import TestReducer from "../reducers/tests/testSlice";
import HematologyReducer from "../reducers/hematology/hematologySlice";
import UaReducer from "../reducers/ua/uaSlice";
import TestResultReducer from "../reducers/testResult/testResultSlice";
import TestFieldReducer from "../reducers/testField/testFieldSlice";
import TestFieldCategoryReducer from "../reducers/testCategoryField/testCategoryFIeldSlice";
import ResultsReducer from "../reducers/results/resultsSlice";

export const store = configureStore({
  reducer: {
    patient: PatientReducer,
    referral: ReferralReducer,
    hmo: HmoReducer,
    testCategory: TestCategoryReducer,
    tests: TestReducer,
    hematology: HematologyReducer,
    ua: UaReducer,
    testResult: TestResultReducer,
    testField: TestFieldReducer,
    testFieldCategory: TestFieldCategoryReducer,
    results: ResultsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
