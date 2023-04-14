import {
  setUsers,
  newUser,
  setUsersError,
  newUserError,
} from "../app/userSlice";
import * as axios from "axios";

const baseUrl = "https://reqres.in/api";

export const GetUsers = async dispatch => {
  try {
    // api call
    const { data } = await axios.get(`${baseUrl}/unknown`);
    dispatch(setUsers(data.data));
  } catch {
    dispatch(setUsersError());
  }
};

export const NewUser = async (dispatch, user) => {
  try {
    // api call
    const { data } = await axios.post(`${baseUrl}/users`, user);
    dispatch(newUser(data));
  } catch (e) {
    dispatch(newUserError());
  }
};
