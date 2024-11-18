import { createSlice } from "@reduxjs/toolkit";
import userList from "./users";

export const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const Euser = state.find((item) => item.id === action.payload.id);
      console.log("Euser", Euser);
      if (Euser) {
        Euser.name = action.payload.name;
        Euser.age = action.payload.age;
      }
    },
    deleteUser: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default userSlice.reducer;
