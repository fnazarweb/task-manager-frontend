import Item from "../../components/Item/Item";
import TodoForm from "../../components/Form/TodoForm";
import styles from "./TodoListPage.module.css";
import classNames from "classnames";
import { HashLoader, BeatLoader } from "react-spinners";
import Button from "../../components/Button/Button";
import { useTodos } from "../../hooks/useTodos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
  { value: "all", label: "All" },
];

const TodoListPage = () => {
  const navigate = useNavigate();
  const {
    todos,
    filteredTodos,
    selectedOption,
    onDeleteHandler,
    isDeletingTodo,
    handleChangeOption,
    onEditHandler,
    setIsFormOpen,
    isFormOpen,
    isTodosLoading,
    isFetching,
    isError,
    error,
  } = useTodos();

  useEffect(() => {
    if (isError) {
      console.log(error);
      navigate("/error", {
        state: {
          error:
            error.data?.message || `Invalid error with code ${error.status}`,
        },
        replace: true,
      });
    }
  }, [navigate, error, isError]);
  const todoClasses = classNames(styles.list, {
    [styles.empty]: todos?.length === 0 && !isFormOpen,
  });

  if (isTodosLoading) {
    return <HashLoader style={{ margin: "0 auto" }} />;
  }
  return (
    <div className={todoClasses}>
      {todos?.length === 0 && !isFormOpen ? (
        <div>
          <p>You don't have any tasks yet</p>
          <Button
            onClick={() => {
              setIsFormOpen(true);
            }}
            disabled={isDeletingTodo}
            text="Add 1st To Do :)"
            variant="add"
          />
        </div>
      ) : (
        <>
          {todos.length !== 0 && (
            <select
              className={styles.select}
              value={selectedOption}
              onChange={handleChangeOption}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
          <TodoForm mode="create" />
          {isFetching && (
            <div>
              <span>Updating</span>
              <BeatLoader size={10} />
            </div>
          )}
          {selectedOption === "all" && (
            <p style={{ fontSize: 23 }}>Tasks: {todos?.length}</p>
          )}
          <ul style={{ padding: 0 }}>
            {filteredTodos?.map((todo) => (
              <li key={todo.id} className={styles.listRow}>
                <Item
                  isDeletingTodo={isDeletingTodo}
                  todo={todo}
                  onDelete={() => onDeleteHandler(todo.id)}
                  onEdit={() => {
                    onEditHandler(todo);
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TodoListPage;
