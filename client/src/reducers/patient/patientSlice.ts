import {
  EntityState,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  patient,
  createPatient,
  updatePatient,
  patientById,
} from "../../api/patientAPI";
import { RootState } from "../../app/store";
import { ec_care_patient } from "../../entity/ec_care_patient";

const patientAdapter = createEntityAdapter<ec_care_patient>();

const initialState = patientAdapter.getInitialState({
  status: "idle",
  error: null,
});

// Retrieve
export const fetchPatient = createAsyncThunk(
  "patient/fetchPatient",
  async () => {
    const response = await patient();
    return response;
  }
);

export const fetchPatientById = createAsyncThunk(
  "patient/fetchPatientById",
  async (id: number | string) => {
    const response = await patientById(id);
    return response;
  }
);

// Insert
export const addPatient = createAsyncThunk(
  "patient/createPatient",
  async (patient: ec_care_patient) => {
    const response = await createPatient(patient);
    return response;
  }
);

// UpdateF
export const editPatient = createAsyncThunk(
  "patient/editPatient",
  async (patient: ec_care_patient) => {
    const response = await updatePatient(patient);
    return response;
  }
);

const patientSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {
    updatePatient(state, action: PayloadAction<ec_care_patient>) {
      const updatedPatient = action.payload;
      patientAdapter.upsertOne(state, updatedPatient);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPatient.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        patientAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchPatient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        patientAdapter.addOne(state, action.payload);
      })
      .addCase(addPatient.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(editPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        patientAdapter.upsertOne(state, action.payload);
      })
      .addCase(editPatient.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default patientSlice.reducer;

export const { selectAll: selectAllPatient, selectById: selectPatientById } =
  patientAdapter.getSelectors<RootState>((state) => state.patient);
