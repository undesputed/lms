import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createTest, tests } from "../../api/testAPI";
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

export const addTests = createAsyncThunk(
  "tests/addTests",
  async (tests: ec_care_tests) => {
    const response = await createTest(tests);
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
      });
  },
});

export default patientSlice.reducer;

export const { selectAll: selectAllTests, selectById: selectTestById } =
  testsAdapter.getSelectors<RootState>((state) => state.tests);