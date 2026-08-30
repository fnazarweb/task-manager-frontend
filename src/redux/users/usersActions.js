import { getUsers, addUser } from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersAsync = createAsyncThunk("users/getUsers", async () => {
  const users = await getUsers();
  return users;
});

export const registerUserAsync = createAsyncThunk(
  "users/registerUser",
  async (payload) => {
    const user = await addUser(payload);
    return user;
  },
);
