import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
    user: string;
    logged: boolean;
};

const initialState: UserState = {
    user: "",
    logged: false
};

export const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUser(state: UserState, action: PayloadAction<string>) {
            return {
                ...state,
                user: action.payload,
                logged: true
            };
        },
        logout(state: UserState) {
            return {
                ...state,
                user: "",
                logged: false
            };
        }
    }
});

export const { changeUser, logout } = slice.actions;
export const userReducer = slice.reducer;