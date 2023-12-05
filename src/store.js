import {configureStore} from "@reduxjs/toolkit";
import sizeReducer from './features/sizeSlice';

export default configureStore({
    reducer: {
        size: sizeReducer
    }
})