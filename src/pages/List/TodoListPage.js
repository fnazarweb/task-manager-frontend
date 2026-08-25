import Item from "../../components/Item/Item";
import TodoForm from "../../components/Form/TodoForm";
import styles from "./TodoListPage.module.css";
import classNames from "classnames";
import { HashLoader, BeatLoader } from "react-spinners";
import Button from "../../components/Button/Button";
import { useTodos } from "../../hooks/useTodos";

const options = [
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
  { value: "all", label: "All" },
];

const TodoListPage = () => {
  const {
    todos,
    filteredTodos,
    selectedOption,
    onDeleteHandler,
    isDeletingTodo,
    editingTodo,
    handleChangeOption,
    onEditHandler,
    setIsFormOpen,
    isFormOpen,
    isTodosLoading,
    isError,
    isFetching,
  } = useTodos();

  const todoClasses = classNames(styles.list, {
    [styles.empty]: todos?.length === 0,
  });

  if (isTodosLoading) {
    return <HashLoader />;
  }
  if (isError) {
    return <h2>Something went wrong: </h2>;
  } else {
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
  }
};

export default TodoListPage;
