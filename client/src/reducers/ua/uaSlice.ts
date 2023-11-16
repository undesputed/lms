import {
  EntityState,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ua, createUa } from "../../api/uaAPI";
import { RootState } from "../../app/store";
import { ec_care_ua } from "../../entity/ec_care_ua";

const uaAdapter = createEntityAdapter<ec_care_ua>();

const initialState = uaAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchUa = createAsyncThunk("ua/fetchUa", async () => {
  const response = await ua();
  return response;
});

export const addUa = createAsyncThunk("ua/createUa", async (ua: ec_care_ua) => {
  const response = await createUa(ua);
  return response;
});

const uaSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUa.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUa.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        uaAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchUa.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUa.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUa.fulfilled, (state, action) => {
        state.status = "succeeded";
        uaAdapter.addOne(state, action.payload);
      })
      .addCase(addUa.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default uaSlice.reducer;

export const { selectAll: selectAllPatient, selectById: selectPatientById } =
  uaAdapter.getSelectors<RootState>((state) => state.ua);
