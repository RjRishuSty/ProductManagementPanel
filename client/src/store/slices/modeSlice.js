import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "appMode",
  initialState: "light",
  reducers: {
    toggleMode: (state) => {
      return state === "light" ? "dark" : "light";
    },
    setLightMode: () => "light",
    setDarkMode: () => "dark",
  },
});

export const { toggleMode, setLightMode, setDarkMode } = modeSlice.actions;
export default modeSlice.reducer;
