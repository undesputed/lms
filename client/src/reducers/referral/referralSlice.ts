import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { referral } from "../../api/referralAPI";
import { RootState } from "../../app/store";
import { ec_care_referral } from "../../entity/ec_care_referral";

const referralAdapter = createEntityAdapter<ec_care_referral>();

const initialState = referralAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchReferral = createAsyncThunk(
  "referral/fetchReferral",
  async () => {
    const response = await referral();
    return response;
  }
);

const referralSlice = createSlice({
  name: "referral",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReferral.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchReferral.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        referralAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchReferral.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default referralSlice.reducer;

export const { selectAll: selectAllReferrals, selectById: selectReferralById } =
  referralAdapter.getSelectors<RootState>((state) => state.referral);
