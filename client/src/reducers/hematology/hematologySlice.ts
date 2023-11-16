import {
  EntityState,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { hematology, createHematology } from "../../api/hematologyAPI";
import { RootState } from "../../app/store";
import { ec_care_hematology } from "../../entity/ec_care_hematology";

const hematologyAdapter = createEntityAdapter<ec_care_hematology>();

const initialState = hematologyAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchHema = createAsyncThunk("hema/fetchHematology", async () => {
  const response = await hematology();
  return response;
});

export const addHema = createAsyncThunk(
  "hema/createHema",
  async (hema: ec_care_hematology) => {
    const response = await createHematology(hema);
    return response;
  }
);

const hematologSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHema.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHema.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        hematologyAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchHema.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addHema.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addHema.fulfilled, (state, action) => {
        state.status = "succeeded";
        hematologyAdapter.addOne(state, action.payload);
      })
      .addCase(addHema.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default hematologSlice.reducer;

export const { selectAll: selectAllPatient, selectById: selectPatientById } =
  hematologyAdapter.getSelectors<RootState>((state) => state.hematology);
