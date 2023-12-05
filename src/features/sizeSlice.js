import {createSlice} from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
    name: 'size', initialState: {
        value: true
    },
    reducers: {
        larger_then_md: (state) => {
            state.value = true
        },
        lesser_then_md: (state) => {
            state.value = false;
        }
    }
})

export const {larger_then_md, lesser_then_md} = sizeSlice.actions

export default sizeSlice.reducer