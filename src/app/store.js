import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import orderSlice from "../features/orderSlice";
import orderItemSlice from "../features/orderItemSlice";
import customerSlice from "../features/customerSlice";
import userSlice from "../features/userSlice";

export default configureStore({
  reducer: {
    product: productSlice,
    order: orderSlice,
    orderItem: orderItemSlice,
    customer: customerSlice,
    user: userSlice,
  },
});
