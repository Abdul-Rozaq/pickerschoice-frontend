import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const user = createSlice({
  name: "user",
  initialState: {
    user: null,
    customer: null,
    registerationToken: "",
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
    getUserByEmail: (state, action) => {
      state.user = action.payload;
    },
    registerUser: (state, action) => {
      state.registerationToken = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    getLoggedInUser: (state, action) => {
      state.customer = action.payload;
    },
  },
});

export const {
  apiCallBegan,
  apiCallEnded,
  apiCallFailed,
  registerUser,
  getUserByEmail,
  logout,
  setCurrentUser,
  getLoggedInUser,
} = user.actions;

export const registerUserAsync = (data) => (dispatch) => {
  dispatch(apiCallBegan());

  axios
    .post("auth/api/v1/register", data)
    .then((res) => {
      dispatch(registerUser(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const getUserByEmailAsync = (email) => (dispatch) => {
  dispatch(apiCallBegan());

  axios
    .get("api/v1/customers/email/" + email)
    .then((res) => {
      // console.log(res.data);
      dispatch(getUserByEmail(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const getLoggedInUserAsync = () => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get("api/v1/customers/me");
    dispatch(getLoggedInUser(data));
    dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error));
    dispatch(apiCallEnded());
  }
};

export const selectUser = (state) => state.user.user;
export const selectCustomer = (state) => state.user.customer;
export const selectLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;
export const selectIsRegistered = (state) => state.user.registerationToken;

export default user.reducer;
