import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { createStore } from 'redux';

const reducer = (state = false, action) => {
    switch (action.type) {
        case "signin-success":
            return true;
        case "signin-fail":
            return false;
        default:
            return state;
    }
};

export const store = createStore(reducer);
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    }, 
})