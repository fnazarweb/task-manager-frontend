import axios from "axios";

export const getSingleTodo = async (id) => {
  const todo = await axios.get(`todos/${id}`);
  return todo.data;
};

export const getUsers = async () => {
  const users = await axios.get("auth");
  return users.data;
};

export const addUser = async (payload) => {
  const user = await axios.post("auth", payload);
  return user.data;
};
