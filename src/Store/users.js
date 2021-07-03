import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Slice
const slice = createSlice({
  name: "users",
  initialState: {
    users: null,
    searched_users: null,
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    searchUsers: (state, actions) => {
      state.searched_users = actions.payload;
    },
  },
});
export default slice.reducer;

export const { getUsers } = slice.actions;
export const { searchUsers } = slice.actions;

export const fetchAllUsers = () => (dispatch) => {
  console.log("fetching.....");
  axios
    .get("https://randomuser.me/api/?results=100")
    .then((resp) => {
      console.log("data", resp);
      dispatch(getUsers(resp.data.results));
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const searchFromUsers = (data, name) => (dispatch) => {
  let temp = {};
  if (name === null || name === "") temp = data;
  else
    temp = data.filter((item) =>
      (item.name.first + item.name.last)
        .toLowerCase()
        .includes(name.toLowerCase())
    );
  console.log("searched data", temp);
  dispatch(searchUsers(temp));
};

export const selectAllUsers = (state) => state.users.users;
export const selectSearchedUsers = (state) => state.users.searched_users;
