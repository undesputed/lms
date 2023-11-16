import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { hmo, hmoById } from "../../api/hmoAPI";
import { RootState } from "../../app/store";
import { ec_care_hmo } from "../../entity/ec_care_hmo";

const hmoAdapter = createEntityAdapter<ec_care_hmo>();

const initialState = hmoAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchHmo = createAsyncThunk("hmo/fetchHmo", async () => {
  const response = await hmo();
  return response;
});

export const fetchHmoById = createAsyncThunk(
  "hmo/fetchHmoById",
  async (id: number | string) => {
    const response = await hmoById(id);
    return response;
  }
);

const hmoSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHmo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchHmo.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        hmoAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchHmo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default hmoSlice.reducer;

export const { selectAll: selectAllHmo, selectById: selectHmoById } =
  hmoAdapter.getSelectors<RootState>((state) => state.hmo);
