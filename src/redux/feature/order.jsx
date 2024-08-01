import { createSlice } from "@reduxjs/toolkit";

export const orderState = createSlice({
    name: "orderData",
    initialState: {
        data: null,
    },
    reducers: {
        addData: (state, action) => {
            state.data = action.payload;
        },
        removeData: (state) => {
            state.data = null;
        },
    },
});

export const { removeData, addData } = orderState.actions;
export default orderState.reducer;
