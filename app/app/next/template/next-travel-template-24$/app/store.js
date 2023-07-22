import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";

export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
    },
});
