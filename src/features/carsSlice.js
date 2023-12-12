import {createSlice} from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'cars', initialState: {
        cars: []
    }, reducers: {
        add: (state, action) => {
            action.payload.forEach((car) => {
                state.cars.push(car);
            })
        }
    }
})

export const {add} = carSlice.actions;

export default carSlice.reducer;