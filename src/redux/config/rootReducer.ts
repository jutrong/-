import { createSlice } from "@reduxjs/toolkit";

const rootReducer = createSlice({
  name: "auth",
  initialState: {
    accessToken:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY5Mjk1MjI1MywiZXhwIjoxNjk0MTYxODUzfQ.hEXfgQlSsJfiYMDlZXmg_I9bIIf5dLJvPZyOAOfiY14",
  },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});
export default rootReducer;
export const { setToken } = rootReducer.actions;
