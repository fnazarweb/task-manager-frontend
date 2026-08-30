import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
} from "../redux/todos/todosApi";

export const useTodos = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [editingTodo, setEditingTodo] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();

  const {
    data: todos,
    isLoading: isTodosLoading,
    isError,
    isFetching,
    error,
  } = useGetTodosQuery();
  const [deleteTodo, { isLoading: isDeletingTodo }] = useDeleteTodoMutation();

  const onDeleteHandler = async (id) => {
    try {
      await deleteTodo(id).unwrap();
    } catch (error) {
      navigate("/error", {
        state: {
          error:
            error.data?.message || `Invalid error with code ${error.status}`,
        },
        replace: true,
      });
    }
  };

  const onEditHandler = (todo) => setEditingTodo(todo);

  const modalClose = () => setEditingTodo(null);

  const handleChangeOption = (e) => setSelectedOption(e.target.value);

  const filteredTodos = todos
    ? selectedOption === "active"
      ? todos.filter((todo) => !todo.checked)
      : selectedOption === "done"
        ? todos.filter((todo) => todo.checked)
        : todos
    : [];

  return {
    todos,
    filteredTodos,
    selectedOption,
    handleChangeOption,
    isDeletingTodo,
    onDeleteHandler,
    editingTodo,
    onEditHandler,
    modalClose,
    setIsFormOpen,
    isFormOpen,
    isTodosLoading,
    isError,
    isFetching,
    error,
  };
};
