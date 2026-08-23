import { useState } from "react";

import ListItemComponent from "../ListItem/ListItemComponent";
import TodoForm from "../TodoForm/TodoForm";

import { getTodoList } from "../api/api";

import styles from "./ListComponent.module.css";
import classNames from "classnames";
import { useQuery } from "react-query";
import { HashLoader, BeatLoader } from "react-spinners";
import ButtonComponent from "../Button/ButtonComponent";

const options = [
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
  { value: "all", label: "All" },
];

const ListComponent = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [isFormVisible, setIsFormVisible] = useState(null);

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

  const onDeleteHandler = (e) => {
    // const updatedTodoList = todos.filter((item) => item.id !== e.target.id);
  };

  const handleChangeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const todoClasses = classNames(styles.list, {
    [styles.empty]: todos?.length === 0,
  });

  const filteredTodos =
    selectedOption === "active"
      ? todos.filter((todo) => !todo.checked)
      : selectedOption === "done"
        ? todos.filter((todo) => todo.checked)
        : todos;
  if (isTodosLoading) {
    return <HashLoader />;
  }
  if (isError) {
    return <h2>Something went wrong: </h2>;
  } else {
    return (
      <div className={todoClasses}>
        {isFetching && (
          <div>
            <span>Updating</span>
            <BeatLoader size={10} />
          </div>
        )}
        {todos?.length === 0 ? (
          <div>
            <p>You don't have any tasks yet</p>
            <ButtonComponent
              text="Add To Do"
              variant="add"
              onClick={() => setIsFormVisible(true)}
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
            <TodoForm
              handleChangeOption={(e) => handleChangeOption(e)}
              selectedOption={selectedOption}
            />
            {selectedOption === "all" && <p>Tasks: {todos?.length}</p>}
            <ul style={{ padding: 0 }}>
              {filteredTodos?.map((todo) => (
                <li key={todo.id} className={styles.listRow}>
                  <ListItemComponent todo={todo} onDelete={onDeleteHandler} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
};

export default ListComponent;
