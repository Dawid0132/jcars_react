import {ADD_CARS} from "../../Actions/Type";

const initialState = {
    cars: []
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case ADD_CARS:
            return {cars: payload};
        default:
            return state;
    }
}
