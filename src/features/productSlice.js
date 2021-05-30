import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: 0,
    products: [],
    product: {},
    cart: [],
    newProduct: {},
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
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
    getProductById: (state, action) => {
      state.product = action.payload;
    },
    newlySavedProduct: (state, action) => {
      state.newProduct = action.payload;
    },
    increment: (state, action) => {
      const theProduct = state.products.find(
        (prod) => prod.productId === action.payload
      );

      if (!theProduct.quantity) {
        theProduct.quantity = 1;
        theProduct.total = theProduct.quantity * theProduct.price;
        state.cart.push(theProduct);
        return;
      }

      theProduct.quantity += 1;
      theProduct.total = theProduct.quantity * theProduct.price;
      const tempCart = state.cart;
      const index = tempCart.findIndex(
        (item) => item.productId === theProduct.productId
      );
      tempCart[index] = theProduct;
      state.cart = tempCart;
    },
    decrement: (state, action) => {
      const theProduct = state.products.find(
        (prod) => prod.productId === action.payload
      );

      if (!theProduct.quantity || theProduct.quantity <= 0)
        return console.log("CANNOT DECREASE ITEM LESS THAN ONE");

      theProduct.quantity -= 1;
      theProduct.total = theProduct.quantity * theProduct.price;
      const tempCart = state.cart;
      const index = tempCart.findIndex(
        (item) => item.productId === theProduct.productId
      );

      if (theProduct.quantity <= 0) {
        tempCart.splice(index, 1);
        state.cart = tempCart;
        return;
      }

      tempCart[index] = theProduct;
      state.cart = tempCart;
    },
  },
});

export const {
  apiCallBegan,
  apiCallEnded,
  apiCallFailed,
  getAllProducts,
  getProductById,
  increment,
  decrement,
  newlySavedProduct,
} = productSlice.actions;

export const getAllProductsAsync = () => (dispatch) => {
  dispatch(apiCallBegan());

  axios
    .get("api/v1/products")
    .then((res) => {
      dispatch(getAllProducts(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const getAllProductsForAdminAsync = () => (dispatch) => {
  dispatch(apiCallBegan());

  axios
    .get("api/v1/products")
    .then((res) => {
      dispatch(getAllProducts(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const getProductByIdAsync = (id) => (dispatch) => {
  dispatch(apiCallBegan());
  axios
    .get(`api/v1/products/${id}`)
    .then((res) => {
      dispatch(getProductById(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const saveProduct = (data) => (dispatch) => {
  dispatch(apiCallBegan());

  axios
    .post("api/v1/products", data)
    .then((res) => {
      dispatch(newlySavedProduct(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const updateProductAsync = (data, id) => (dispatch) => {
  dispatch(apiCallBegan());

  axios
    .put(`api/v1/products/${id}`, data)
    .then((res) => {
      console.log(res);
      dispatch(newlySavedProduct(res.data));
      dispatch(apiCallEnded());
    })
    .catch((err) => {
      dispatch(apiCallFailed(err.message));
      dispatch(apiCallEnded());
      console.log(err);
    });
};

export const selectCart = (state) => state.product.cart;
export const selectProducts = (state) => state.product.products;
export const selectProduct = (state) => state.product.product;
export const selectLoading = (state) => state.product.isLoading;
export const selectError = (state) => state.product.error;
export const selectNewProduct = (state) => state.product.newProduct;

export default productSlice.reducer;
