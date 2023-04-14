import { createSlice, createAction } from "@reduxjs/toolkit";

export const setUsersError = createAction("setUsersError");
export const newUserError = createAction("newUserError");
export const editUserError = createAction("editUserError");
export const deleteUserError = createAction("deleteUserError");

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      return { ...state, users: [...action.payload] };
    },
    newUser: (state, action) => {
      return { ...state, users: [action.payload, ...state.users] };
    },
  },
});

export const { setUsers, newUser } = usersSlice.actions;

export default usersSlice.reducer;
