import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ec_care_results } from "../../entity/ec_care_results";
import { createResult, deleteResult, deleteResultByTest, editResult, retrieveTestByTestField } from "../../api/resultsAPI";

const resultAdapter = createEntityAdapter<ec_care_results>();

const initialState = resultAdapter.getInitialState({
    status: "idle",
    error: null,
})

export const fetchResultByTestField = createAsyncThunk(
    "results/fetchResultsByTestField",
    async (data: { test_id: number | string, patient_id: number | string }) => {
        const response = await retrieveTestByTestField(data.test_id, data.patient_id);
        return response;
    }
)

export const insertResult = createAsyncThunk(
    "results/addResult",
    async (results: ec_care_results) => {
        const response = await createResult(results);
        return response;
    }
)

export const modifyResult = createAsyncThunk(
    "results/modifyResult",
    async (data: { result: any, id: number | string }) => {
        const response = await editResult(data.id, data.result);
        return response
    }
)

export const removeResult = createAsyncThunk(
    "results/removeResult",
    async (data: { test_id: number | string, patient_id: number | string }) => {
        const response = await deleteResult(data.test_id, data.patient_id);
        return response;
    }
)

export const removeResultByTest = createAsyncThunk(
    "results/removeResultByTest",
    async (test_id: number | string) => {
        const response = await deleteResultByTest(test_id);
        return response;
    }
)

const resultsSlice = createSlice({
    name: "patient",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(insertResult.pending, (state) => {
                state.status = "loading";
            })
            .addCase(insertResult.fulfilled, (state, action: any) => {
                state.status = "succeeded";
                resultAdapter.upsertOne(state, action.payload);
            })
            .addCase(insertResult.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(modifyResult.pending, (state) => {
                state.status = "loading";
            })
            .addCase(modifyResult.fulfilled, (state, action: any) => {
                state.status = "succeeded";
                resultAdapter.updateOne(state, action.payload);
            })
            .addCase(modifyResult.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(removeResult.pending, (state) => {
                state.status = "loading";
            })
            .addCase(removeResult.fulfilled, (state, action: any) => {
                state.status = "succeeded";
                resultAdapter.upsertMany(state, action.payload);
            })
            .addCase(removeResult.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default resultsSlice.reducer;

export const { selectAll: selectAllTests, selectById: selectTestById } =
    resultAdapter.getSelectors<RootState>((state) => state.results);
