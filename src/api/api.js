import axios from "axios";

export const getTodoList = async () => {
  const todos = await axios.get("todos");
  return todos.data;
};

export const addTodo = async (payload) => {
  await axios.post("todos", payload);
};
