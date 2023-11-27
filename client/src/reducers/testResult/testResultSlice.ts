import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import {
  testResult,
  createTestResult,
  updateTestResult,
  testResultByPatient,
  patientTotalById,
  deleteTestResult,
  testResultById,
  deleteTestResultByTest,
} from "../../api/testResultAPI";
import { RootState } from "../../app/store";
import { ec_care_testResult } from "../../entity/ec_care_testResult";
import { useAppSelector } from "../../actions/hooks";

const testResultAdapter = createEntityAdapter<ec_care_testResult>();

const initialState = testResultAdapter.getInitialState({
  status: "idle",
  error: null,
});

// Retrieve
export const fetchResult = createAsyncThunk(
  "testResult/fetchTestResult",
  async () => {
    const response = await testResult();
    return response;
  }
);

export const fetchResultById = createAsyncThunk(
  "testResult/fetchTestResultById",
  async (id: number | string) => {
    const response = await testResultById(id);
    return response;
  }
);

export const fetchResultByPatient = createAsyncThunk(
  "testResult/fetchTestResultsByPatient",
  async (patient_id: number | string) => {
    const response = await testResultByPatient(patient_id);
    return response;
  }
);

export const fetchTotalResultByPatient = createAsyncThunk(
  "testResult/fetchTotalByPatient",
  async (patient_id: number | string) => {
    const response = await patientTotalById(patient_id);
    return response;
  }
);

// Create
export const addResult = createAsyncThunk(
  "testResult/addTestResult",
  async (testResult: ec_care_testResult) => {
    const response = await createTestResult(testResult);
    return response;
  }
);

// Update
export const updateResult = createAsyncThunk(
  "testResult/updateTestResult",
  async (testResult: ec_care_testResult) => {
    const response = await updateTestResult(testResult);
    return response;
  }
);

// Delete
export const deleteResult = createAsyncThunk(
  "testResult/deleteTestResult",
  async (id: number | string) => {
    const response = await deleteTestResult(id);
    return response;
  }
);

export const deleteResultByTest = createAsyncThunk(
  "testResult/deleteTestResultByTest",
  async (id: number | string) => {
    const response = await deleteTestResultByTest(id);
    return response;
  }
);

const testResultSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchResult.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchResult.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        testResultAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchResult.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addResult.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addResult.fulfilled, (state, action) => {
        state.status = "succeeded";
        testResultAdapter.addOne(state, action.payload);
      })
      .addCase(addResult.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteResult.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteResult.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteResult.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default testResultSlice.reducer;

export const {
  selectAll: selectAllTestResult,
  selectById: selectTestResultById,
} = testResultAdapter.getSelectors<RootState>((state) => state.testResult);

export const selectTestResultByPatientId = createSelector(
  [selectAllTestResult, (state, patient_id) => patient_id],
  (testResult, patient_id) => {
    return testResult.length > 0
      ? testResult.filter(
        (testResult) => testResult.patient_id.id === patient_id
      )
      : {};
  }
);
