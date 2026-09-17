import axios from "axios";

export const getSingleTodo = async (id) => {
  const token = localStorage.getItem("token");

  const todo = await axios.get(`task/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return todo.data;
};

export const registerUser = async (payload) => {
  const response = await axios.post("auth/register", payload);
  return response.data;
};

export const loginUser = async (payload) => {
  const response = await axios.post("auth/login", payload);
  return response.data;
};
