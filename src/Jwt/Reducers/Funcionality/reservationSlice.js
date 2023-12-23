import {CLEAR_RESERVATION, SET_RESERVATION} from "../../Actions/Type";

const initialState = {}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SET_RESERVATION:
            return {...state, payload}
        case CLEAR_RESERVATION:
            return {}
        default:
            return state;
    }
}

/*
export const reservationSlice = createSlice({
    name: 'reservation', initialState: reservation,
    reducers: {
        fullname: (state, action) => {
            return {...state, fullname: action.payload}
        },
        nip: (state, action) => {
            return {...state, nip: action.payload}
        },
        address: (state, action) => {
            return {...state, address: action.payload}
        },
        zipcode: (state, action) => {
            return {...state, zipcode: action.payload}
        },
        city: (state, action) => {
            return {...state, city: action.payload}
        },
        promotioncode: (state, action) => {
            return {...state, promotioncode: action.payload}
        },
        phone: (state, action) => {
            return {...state, phone: action.payload}
        },
        email: (state, action) => {
            return {...state, email: action.payload}
        },
        carlicense: (state, action) => {
            return {...state, carlicense: action.payload}
        },
        documentid: (state, action) => {
            return {...state, documentid: action.payload}
        },
        personid: (state, action) => {
            return {...state, personid: action.payload}
        }
    }
})

export const {
    fullname,
    nip,
    address,
    zipcode,
    city,
    promotioncode,
    phone,
    email,
    carlicense,
    documentid,
    personid
} = reservationSlice.Actions

export default reservationSlice.reducer*/
