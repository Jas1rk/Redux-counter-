import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './count'

const store = configureStore({
    reducer:{
        count:counterSlice
    }
})

export default store