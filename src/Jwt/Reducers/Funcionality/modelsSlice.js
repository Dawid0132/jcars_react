import {ADD_MODELS} from "../../Actions/Type";

const initialState = {
    models: []
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case ADD_MODELS:
            return {models: payload};
        default:
            return state;
    }
}