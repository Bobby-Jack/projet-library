import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./features/accountSlice";
export const store = configureStore({
    reducer:{
        account: accountSlice,
    }
})