// import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteUser(state, action) {},
  },
});
export const { addUser, removeUser, deleteUser } = userSlice.actions;
console.log(userSlice.actions);
export default userSlice.reducer;
