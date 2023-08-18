import { createSlice } from "@reduxjs/toolkit";

const rootReducer = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});
export default rootReducer;
export const { setToken } = rootReducer.actions;
