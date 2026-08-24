import { useState } from "react";
import { getTodoList } from "../api/api";
import { useQuery } from "react-query";
import { useTodoMutations } from "./useTodoMutations";

export const useTodos = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [editingTodo, setEditingTodo] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const {
    isPending: isTodosLoading,
    isError,
    isFetching,
    data: todos,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoList,
    refetchOnWindowFocus: false,
  });

  const { deleteMutateAsync, isDeletingTodo } = useTodoMutations();

  const onDeleteHandler = async (id) => {
    try {
      await deleteMutateAsync(id);
    } catch (error) {
      console.warn("Something went wrong with deleting todo... ", error);
    }
  };

  const onEditHandler = (todo) => setEditingTodo(todo);

  const modalClose = () => setEditingTodo(null);

  const handleChangeOption = (e) => setSelectedOption(e.target.value);

  const filteredTodos =
    selectedOption === "active"
      ? todos.filter((todo) => !todo.checked)
      : selectedOption === "done"
        ? todos.filter((todo) => todo.checked)
        : todos;

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
  };
};
