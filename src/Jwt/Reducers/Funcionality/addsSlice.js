import {ADD_TO_LIST_ADD, CLEAR_MESSAGE, REMOVE_FROM_LIST_ADD, SET_MESSAGE} from "../../Actions/Type";

const initialState = {
    adds: [{
        id: 1, title: "Ubezpieczenie OC/AC/NNW", description: null, price: null
    }]
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case ADD_TO_LIST_ADD:
            return {...state, adds: [...state.adds, payload]}
        case REMOVE_FROM_LIST_ADD:
            return {...state, adds: state.adds.filter((add) => add.id !== payload.id)}
        default:
            return state;
    }
}

/*
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

export const {addToList, removeFromList, clearList} = addsSlice.Actions

export default addsSlice.reducer;*/
