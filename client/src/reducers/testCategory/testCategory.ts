import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createCategory, deleteTestCategory, testCategory, testCategoryById } from "../../api/testCategoryAPI";
import { RootState } from "../../app/store";
import { ec_care_test_category } from "../../entity/ec_care_test_category";

const testCategoryAdapter = createEntityAdapter<ec_care_test_category>();

const initialState = testCategoryAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchTestCategory = createAsyncThunk(
  "testCategory/fetchTestCategory",
  async () => {
    const response = await testCategory();
    return response;
  }
);

export const fetchTestCatById = createAsyncThunk(
  "testCategory/fetchTextCatById",
  async (id: number | string) => {
    const response = await testCategoryById(id);
    return response;
  }
)

export const addTestCategory = createAsyncThunk(
  "testCategory/addTestCategory",
  async (testCategory: ec_care_test_category) => {
    const response = await createCategory(testCategory);
    return response
  }
)

export const removeTestCategory = createAsyncThunk(
  "testCategory/removeTestCategory",
  async (id: number | string) => {
    const response = await deleteTestCategory(id);
    return response;
  }
)

const testCategorySlice = createSlice({
  name: "referral",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTestCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTestCategory.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        testCategoryAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchTestCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTestCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addTestCategory.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        testCategoryAdapter.addOne(state, action.payload);
      })
      .addCase(addTestCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

  },
});

export default testCategorySlice.reducer;

export const {
  selectAll: selectAllTestCategory,
  selectById: selectTestCategoryById,
} = testCategoryAdapter.getSelectors<RootState>((state) => state.testCategory);
