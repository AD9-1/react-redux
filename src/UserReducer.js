import { createSlice } from "@reduxjs/toolkit";
import userList from "../users/userList";

const userSlice=createSlice({
name:users,
initialState:userList,
reducers:{
    addUser: (state,action) => {
        state.push(action.payload);
    }
}
})
export default userSlice.reducer;