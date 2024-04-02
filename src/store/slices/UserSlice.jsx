// import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    //reducer function always take two parameters
    //1- state: the current data of redux
    //2- action: data which user passing to the reducer function
    addUser(state, action) {
      state.push(action.payload); // payload: data transfering from one point to another
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
