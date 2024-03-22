// import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      // console.log("hiii", action.payload);
      // state.pop(action.payload);
      state.splice(action.payload, 1);
    },
    deleteUser(state, action) {
      console.log("hii delete");
      return [];
    },
  },
});
export const { addUser, removeUser, deleteUser } = userSlice.actions;
console.log(userSlice.actions);
export default userSlice.reducer;
