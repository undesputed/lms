import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createTest,
  deleteTest,
  deleteTestByField,
  findTestByTest,
  findTestDetailsByTest,
  tests,
} from "../../api/testAPI";
import { RootState } from "../../app/store";
import { ec_care_tests } from "../../entity/ec_care_tests";

const testsAdapter = createEntityAdapter<ec_care_tests>();

const initialState = testsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchTests = createAsyncThunk("tests/fetchTests", async () => {
  const response = await tests();
  return response;
});

export const getTestByTest = createAsyncThunk(
  "tests/getTestByTest",
  async (test_id: number | string) => {
    const response = await findTestByTest(test_id);
    return response;
  }
);

export const getTestByDetailId = createAsyncThunk(
  "test/getTestByDetailId",
  async (test_id: number | string) => {
    const response = await findTestDetailsByTest(test_id);
    return response;
  }
);

export const addTests = createAsyncThunk(
  "tests/addTests",
  async (tests: ec_care_tests) => {
    const response = await createTest(tests);
    return response;
  }
);

export const removeTest = createAsyncThunk(
  "tests/removeTest",
  async (test_id: number | string) => {
    const response = await deleteTest(test_id);
    return response;
  }
);

export const removeTestByField = createAsyncThunk(
  "tests/removeTestByField",
  async (params: { test_id: number | string; field_id: number | string }) => {
    const response = await deleteTestByField(params.test_id, params.field_id);
    return response;
  }
);

const patientSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTests.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTests.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        testsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchTests.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTests.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTests.fulfilled, (state, action) => {
        state.status = "succeeded";
        testsAdapter.addOne(state, action.payload);
      })
      .addCase(addTests.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(removeTestByField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeTestByField.fulfilled, (state, action) => {
        state.status = "succeeded";
        testsAdapter.removeOne(state, action.payload);
      })
      .addCase(removeTestByField.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default patientSlice.reducer;

export const { selectAll: selectAllTests, selectById: selectTestById } =
  testsAdapter.getSelectors<RootState>((state) => state.tests);
