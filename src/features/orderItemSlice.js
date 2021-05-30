import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const orderItemSlice = createSlice({
  name: "orderItem",
  initialState: {
    orderItems: [],
    isLoading: true,
    error: "",
  },
  reducers: {
    apiCallBegan: (state) => {
      state.isLoading = true;
    },
    apiCallEnded: (state) => {
      state.isLoading = false;
    },
    apiCallFailed: (state, action) => {
      state.error = action.payload;
    },
    getAllOrderItems: (state, action) => {
      state.orderItems = action.payload;
    },
  },
});

export const {
  apiCallBegan,
  apiCallEnded,
  apiCallFailed,
  getAllOrderItems,
} = orderItemSlice.actions;

export const getAllOrderItemsForAdminAsync = (id) => (dispatch) => {
  dispatch(apiCallBegan());
  axios
    .get("api/v1/order-items/" + id)
    .then((res) => {
      dispatch(getAllOrderItems(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const selectorderItems = (state) => state.orderItem.orderItems;
export const selectLoading = (state) => state.orderItem.isLoading;
export const selectError = (state) => state.orderItem.error;

export default orderItemSlice.reducer;
