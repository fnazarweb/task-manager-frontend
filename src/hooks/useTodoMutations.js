import { useMutation } from "react-query";
import { addTodo, updateTodo, deleteTodo } from "../api/api";
import { queryClient } from "../index";

export const useTodoMutations = () => {
  const { mutateAsync: createMutateAsync, isLoading: isAddingTodo } =
    useMutation({
      mutationFn: addTodo,
      onSuccess: () => queryClient.invalidateQueries(["todos"]),
      onError: (error) => {
        console.log("Something went wrong...", error);
      },
    });

  const { mutateAsync: updateMutateAsync, isLoading: isUpdatingTodo } =
    useMutation({
      mutationFn: updateTodo,
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
      onError: (error) => {
        console.log("Something went wrong...", error);
      },
    });

  const { mutateAsync: deleteMutateAsync, isLoading: isDeletingTodo } =
    useMutation({
      mutationFn: deleteTodo,
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
      onError: (error) => {
        console.warn("Something went wrong with deleting todo... ", error);
      },
    });

  return {
    createMutateAsync,
    updateMutateAsync,
    deleteMutateAsync,
    isAddingTodo,
    isUpdatingTodo,
    isDeletingTodo,
  };
};
