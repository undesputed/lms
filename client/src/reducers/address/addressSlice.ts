// import {
//   createAsyncThunk,
//   createEntityAdapter,
//   createSlice,
// } from "@reduxjs/toolkit";
// import { ec_care_address } from "../../entity/ec_care_address";
// import {
//   deleteAddress,
//   getAddress,
//   saveAddress,
//   updateAddress,
// } from "../../api/addressAPI";
// import { ec_care_addressSelector } from "../../selector/ec_care_addressSelector";
// import { RootState } from "../../app/store";

// const addressAdapter = createEntityAdapter<ec_care_address>();

// const initialState = addressAdapter.getInitialState({
//   status: "idle",
//   error: null,
// });

// export const fetchAddress = createAsyncThunk(
//   "address/fetchAddress",
//   async () => {
//     const response = await getAddress();
//     return response;
//   }
// );

// export const addNewAddress = createAsyncThunk(
//   "address/addNewAddress",
//   async (credentials: ec_care_addressSelector) => {
//     const response = await saveAddress(credentials);
//     return response;
//   }
// );

// export const editAddress = createAsyncThunk(
//   "address/editAddress",
//   async (credentials: ec_care_address) => {
//     const response = await updateAddress(credentials);
//     return response;
//   }
// );

// export const removeAddress = createAsyncThunk(
//   "address/removeAddress",
//   async (id: number) => {
//     const response = await deleteAddress(id);
//     return response;
//   }
// );

// const mapResponse = (response: ec_care_address[]): ec_care_address[] => {
//   return response.map((item) => ({
//     ...item,
//     id: item.id,
//     addressName: item.addressName,
//     created_at: item.created_at,
//     updated_at: item.updated_at,
//     municipal: item.municipal,
//     barangay: item.barangay,
//     city: item.city,
//   }));
// };

// const addressSlice = createSlice({
//   name: "address",
//   initialState: initialState,
//   reducers: {
//     addressAdded: addressAdapter.addOne,
//     addressUpdated(state, action) {
//       editAddress(action.payload);
//       const { id, addressName, updated_at, municipal, barangay, city } =
//         action.payload;
//       const existingAddress = state.entities[id];
//       if (existingAddress) {
//         existingAddress.addressName = addressName;
//         existingAddress.updated_at = updated_at;
//         existingAddress.municipal.id = municipal;
//         existingAddress.barangay.id = barangay;
//         existingAddress.city.id = city;
//       }
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchAddress.pending, (state, action) => {
//         state.status = "loading";
//       })
//       .addCase(fetchAddress.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         if (Array.isArray(action.payload)) {
//           const transformedPayload = mapResponse(action.payload);
//           addressAdapter.setAll(state, transformedPayload);
//         }
//         // addressAdapter.upsertMany(state, action.payload);
//       })
//       .addCase(fetchAddress.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(addNewAddress.fulfilled, addressAdapter.addOne)
//       .addCase(removeAddress.fulfilled, (state, action) => {
//         addressAdapter.removeOne(state, action.payload.id);
//       });
//   },
// });

// export const { addressAdded, addressUpdated } = addressSlice.actions;
// export default addressSlice.reducer;

// export const {
//   selectAll: selectAllAddress,
//   selectById: selectAddressById,
//   selectIds: selectAddressIds,
// } = addressAdapter.getSelectors<RootState>((state) => state.address);
