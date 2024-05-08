import { configureStore } from "@reduxjs/toolkit";
import dataProvider from "./dataProvider";
import counterSlice from "./coutnerSlice";
import { actionLogger, payloadLogger } from "./middleware";

const store = configureStore({
    reducer : {
        counterSlice
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(actionLogger, payloadLogger)
})

export default store