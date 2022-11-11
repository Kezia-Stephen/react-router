//react-redux
import { configureStore } from "@reduxjs/toolkit";
import sampleSlice from "./slice";
import newSlice from "./NewSlice"

export const store = configureStore({
    reducer: {
        sample: sampleSlice,
        new: newSlice,
    },
});