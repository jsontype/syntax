import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Hotel", icon: "icon-bed" },
    { id: 2, name: "Tour", icon: "icon-destination" },
    { id: 3, name: "Activity", icon: "icon-ski" },
    { id: 4, name: "Holyday Rentals", icon: "icon-home" },
    { id: 5, name: "Car", icon: "icon-car" },
    { id: 6, name: "Cruise", icon: "icon-yatch" },
    { id: 7, name: "Flights", icon: "icon-tickets" },
  ],
  currentTab: "Hotel",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
