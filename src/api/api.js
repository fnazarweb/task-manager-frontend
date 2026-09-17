import axios from "axios";

export const getSingleTodo = async (id) => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const credentials = btoa(`${email}:${password}`);

  const todo = await axios.get(`task/${id}`, {
    headers: {
      Authorization: `Basic ${credentials}`,
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
