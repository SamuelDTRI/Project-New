import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "User 1",
    description: "User 1 Description",
    completed: false,
  },
  {
    id: "2",
    title: "User 2",
    description: "User 2 Description",
    completed: false,
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      const userFound = state.find((user) => user.id === action.payload);
      if (userFound) {
        state.splice(state.indexOf(userFound), 1);
      }
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
