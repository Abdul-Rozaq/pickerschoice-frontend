import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    value: 0,
    customers: [],
    customer: {},
    isLoading: false,
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
    getAllcustomers: (state, action) => {
      state.customers = action.payload;
    },
    getcustomerById: (state, action) => {
      state.customer = action.payload;
    },
    getAllOrdersForcustomer: (state, action) => {
      state.customerOrders = action.payload;
    },
  },
});

export const {
  apiCallBegan,
  apiCallEnded,
  apiCallFailed,
  getAllcustomers,
  getcustomerById,
  getAllOrdersForcustomer,
} = customerSlice.actions;

export const getAllcustomersForAdminAsync = () => (dispatch) => {
  dispatch(apiCallBegan());
  axios
    .get("api/v1/customers")
    .then((res) => {
      dispatch(getAllcustomers(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const getcustomerByIdAsync = (id) => (dispatch) => {
  dispatch(apiCallBegan());
  axios
    .get(`api/v1/customers/${id}`)
    .then((res) => {
      dispatch(getcustomerById(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const selectcustomers = (state) => state.customer.customers;
export const selectcustomer = (state) => state.customer.customer;
export const selectLoading = (state) => state.customer.isLoading;
export const selectError = (state) => state.customer.error;

export default customerSlice.reducer;
