import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import blogReducer from "../features/blog/blogSlice";
import contactReducer from "../features/contact/contactSlice";
import orderReducer from "../features/order/orderSlice";
import couponReducer from "../features/coupon/couponSlice";
export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        blog: blogReducer,
        contact: contactReducer,
        order: orderReducer,
        coupon: couponReducer,
    },
});
