import {ADD_CARS,SIZE_CHANGED} from "../../../Actions/Type";

export const addCars = (data) => ({
    type: ADD_CARS,
    payload: data
})

export const setLargerThenMd = () => ({
    type: SIZE_CHANGED,
    payload: false
})


export const setLesserThenMd = () => ({
    type: SIZE_CHANGED,
    payload: true
})



