import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

type GetState = typeof store.getState;
export type TypeReducer = ReturnType<GetState>;