import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  testCategoryField,
  testCategoryFieldByFieldId,
} from "../../api/testCategoryFieldAPI";
import { RootState } from "../../app/store";
import { ec_care_test_field_category_field } from "../../entity/ec_care_test_field_category_field";
import { GridRowId } from "@mui/x-data-grid";

const testFieldCategoryAdapter =
  createEntityAdapter<ec_care_test_field_category_field>();

const initialState = testFieldCategoryAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchByField = createAsyncThunk(
  "testFieldCategory/fetchCategory",
  async () => {
    const response = await testCategoryField();
    return response;
  }
);

export const fetchByFieldId = createAsyncThunk(
  "testFieldCategory/fetchCategoryByFieldId",
  async (field_id: number | string | GridRowId) => {
    const response = await testCategoryFieldByFieldId(field_id);
    return response;
  }
);

const testFieldCategorySlice = createSlice({
  name: "referral",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchByField.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchByField.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        testFieldCategoryAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchByField.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default testFieldCategorySlice.reducer;

export const {
  selectAll: selectAllTestFieldCategory,
  selectById: selectTestFieldCategoryById,
} = testFieldCategoryAdapter.getSelectors<RootState>(
  (state) => state.testFieldCategory
);
