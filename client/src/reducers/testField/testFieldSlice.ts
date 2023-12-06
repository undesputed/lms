import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  CreateTestField,
  DeleteTestFieldById,
  TestField,
  TestFieldById,
  updateTestField,
} from "../../api/testFieldAPI";
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

export const fetchTestFieldByid = createAsyncThunk(
  "testField/fetchFieldById",
  async (id: number | string) => {
    const response = await TestFieldById(id);
    return response;
  }
);

export const addTestField = createAsyncThunk(
  "testField/addTestField",
  async (testField: ec_care_test_field) => {
    const response = await CreateTestField(testField);
    return response;
  }
);

export const editTestField = createAsyncThunk(
  "testField/editTestField",
  async (testField: ec_care_test_field) => {
    const response = await updateTestField(testField);
    return response;
  }
);

export const removeTestField = createAsyncThunk(
  "testField/removeTestField",
  async (id: number) => {
    const response = await DeleteTestFieldById(id);
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
      })
      .addCase(addTestField.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addTestField.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        testFieldAdapter.addOne(state, action.payload);
      })
      .addCase(addTestField.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeTestField.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(removeTestField.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        testFieldAdapter.removeOne(state, action.payload);
      })
      .addCase(removeTestField.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editTestField.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(editTestField.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        testFieldAdapter.updateOne(state, action.payload);
      })
      .addCase(editTestField.rejected, (state, action) => {
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
