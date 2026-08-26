import { useMutation } from "react-query";
import { addTodo, updateTodo, deleteTodo } from "../api/api";
import { queryClient } from "../index";
import { useNavigate } from "react-router-dom";

export const useTodoMutations = () => {
  const navigate = useNavigate();

  const { mutateAsync: createMutateAsync, isLoading: isAddingTodo } =
    useMutation({
      mutationFn: addTodo,
      onSuccess: () => queryClient.invalidateQueries(["todos"]),
      onError: (error) => {
        navigate("/error", {
          state: {
            error: error.message,
          },
          replace: true,
        });
      },
    });

  const { mutateAsync: updateMutateAsync, isLoading: isUpdatingTodo } =
    useMutation({
      mutationFn: updateTodo,
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
      onError: (error) => {
        navigate("/error", {
          state: {
            error: error.message,
          },
          replace: true,
        });
      },
    });

  const { mutateAsync: deleteMutateAsync, isLoading: isDeletingTodo } =
    useMutation({
      mutationFn: deleteTodo,
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
      onError: (error) => {
        navigate("/error", {
          state: {
            error: error.message,
          },
          replace: true,
        });
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
