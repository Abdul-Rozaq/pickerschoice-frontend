import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    order: {},
    newOrder: {},
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
    getAllOrders: (state, action) => {
      state.orders = action.payload;
    },
    getOrderById: (state, action) => {
      state.order = action.payload;
    },
    saveNewOrder: (state, action) => {
      state.newOrder = action.payload;
    },
  },
});

export const {
  apiCallBegan,
  apiCallEnded,
  apiCallFailed,
  getAllOrders,
  getOrderById,
  saveNewOrder,
} = orderSlice.actions;

// FETCH ALL ORDERS for a customer
export const getAllOrdersForCustomer = () => (dispatch) => {
  dispatch(apiCallBegan());

  axios
    .get("api/v1/orders/me")
    .then((res) => {
      dispatch(getAllOrders(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
    });
};

// FETCH ALL ORDERS
export const getAllOrdersForAdminAsync = () => (dispatch) => {
  dispatch(apiCallBegan());

  axios
    .get("api/v1/orders")
    .then((res) => {
      dispatch(getAllOrders(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
    });
};

// FETCH AN ORDER BY ID
export const getOrderByIdAsync = (id) => (dispatch) => {
  dispatch(apiCallBegan());
  axios
    .get(`api/v1/orders/${id}`)
    .then((res) => {
      dispatch(getOrderById(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
    });
};

// CREATE A NEW ORDER
export const saveOrderAsync = (request) => (dispatch) => {
  dispatch(apiCallBegan);

  axios
    .post(`api/v1/orders`, request)
    .then((res) => {
      dispatch(saveNewOrder(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
    });
};

export const updateOrderStatusAsync = (id) => (dispatch) => {
  dispatch(apiCallBegan);

  axios
    .put(`api/v1/orders/${id}`)
    .then((res) => {
      dispatch(saveNewOrder(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
    });
};

export const selectorders = (state) => state.order.orders;
export const selectNewOrder = (state) => state.order.newOrder;
export const selectorder = (state) => state.order.order;
export const selectLoading = (state) => state.order.isLoading;
export const selectError = (state) => state.order.error;

export default orderSlice.reducer;
