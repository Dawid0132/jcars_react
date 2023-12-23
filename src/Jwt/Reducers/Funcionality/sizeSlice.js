import {createSlice} from "@reduxjs/toolkit";
import {LARGER_THEN_MD, LESSER_THEN_MD} from "../../Actions/Type";

const initialState = {
    sizeChanged: true
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case LARGER_THEN_MD:
            return {sizeChanged: true}
        case LESSER_THEN_MD:
            return {sizeChanged: false}
        default:
            return state
    }
}

/*
export const sizeSlice = createSlice({
    name: 'size', initialState: {
        value: true
    }, reducers: {
        larger_then_md: (state) => {
            state.value = true
        }, lesser_then_md: (state) => {
            state.value = false;
        }
    }
})

export const {larger_then_md, lesser_then_md} = sizeSlice.Actions

export default sizeSlice.reducer*/
