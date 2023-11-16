import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { TestField } from "../../api/testFieldAPI";
import { RootState } from "../../app/store";
import { ec_care_test_field } from "../../entity/ec_care_test_field";

const testFieldAdapter = createEntityAdapter<ec_care_test_field>();

const initialState = testFieldAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchTestField = createAsyncThunk(
  "testField/fetchField",
  async () => {
    const response = await TestField();
    return response;
  }
);

const testFieldSlice = createSlice({
  name: "referral",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTestField.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTestField.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        testFieldAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchTestField.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default testFieldSlice.reducer;

export const {
  selectAll: selectAllTestField,
  selectById: selectTestFieldById,
} = testFieldAdapter.getSelectors<RootState>((state) => state.testField);
