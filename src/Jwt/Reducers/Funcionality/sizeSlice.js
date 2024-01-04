import {SIZE_CHANGED} from "../../Actions/Type";

const initialState = {
    sizeChanged: true
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SIZE_CHANGED:
            return {sizeChanged: payload}
        default:
            return state
    }
}
