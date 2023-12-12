import {createSlice} from "@reduxjs/toolkit";

const addsSlice = createSlice({
    name: 'adds', initialState: {
        list: [{
            id: 1,
            title: "Ubezpieczenie OC/AC/NNW",
            description: null,
            price: null
        }]
    }, reducers: {
        addToList: (state, action) => {
            state.list.push((action.payload))
        }, removeFromList: (state, action) => {
            state.list = state.list.filter((add) => add.id !== action.payload.id)
        }, clearList: (state) => {
            state.list = [];
        }
    }
})

export const {addToList, removeFromList, clearList} = addsSlice.actions

export default addsSlice.reducer;