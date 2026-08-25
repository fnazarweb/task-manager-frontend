import axios from "axios";

export const getTodoList = async () => {
  const todos = await axios.get("todos");
  return todos.data;
};

export const addTodo = async (payload) => {
  await axios.post("todos", payload);
};

export const updateTodo = async (payload) => {
  await axios.put(`todos/${payload.id}`, payload);
};

export const deleteTodo = async (id) => {
  await axios.delete(`todos/${id}`);
};

export const getSingleTodo = async (id) => {
  const todo = await axios.get(`todos/${id}`);
  return todo.data;
};
