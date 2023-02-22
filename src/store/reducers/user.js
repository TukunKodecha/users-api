// third-party
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

// project import
import { dispatch } from "../index";

const initialState = {
  error: null,
  user: null,
  users: [],
};

// ==============================|| SLICE - USER ||============================== //

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET USER
    getUserSuccess(state, action) {
      state.user = action.payload;
    },

    // GET USERS
    getUsersSuccess(state, action) {
      state.users = action.payload;
    },
  },
});

// Reducer
export default user.reducer;

export function getUsers() {
  return async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(user.actions.getUsersSuccess(response.data));
    } catch (error) {
      dispatch(user.actions.hasError(error));
    }
  };
}
