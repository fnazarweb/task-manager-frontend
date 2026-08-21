import { useEffect, useState } from "react";

import ListItemComponent from "../ListItem/ListItemComponent";
import ButtonComponent from "../Button/ButtonComponent";
import CheckboxComponent from "../Checkbox/CheckboxComponent";

import styles from "./ListComponent.module.css";
import classNames from "classnames";

const ListComponent = () => {
  const firstTodos = [
    { id: crypto.randomUUID(), name: "to do homework", isDone: false },
    { id: crypto.randomUUID(), name: "understand props", isDone: false },
    { id: crypto.randomUUID(), name: "to do delete button", isDone: false },
  ];

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const lsTodos = localStorage.getItem("todos");
    return lsTodos ? JSON.parse(lsTodos) : firstTodos;
  });
  const [selectedOption, setSelectedOption] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
    console.log("useEffect");
  }, [todoList]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const errorMin = "Must be more then 3 characters";
    const errorMax = "Must be less then 50 characters";
    setInput(value);

    if (value.length <= 3 && value.length > 0) {
      setError(errorMin);
    } else if (value.length >= 50) {
      setError(errorMax);
    } else {
      setError("");
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler(input);
    }
  };

  const onClickHandler = (input) => {
    if (input && error === "") {
      const updatedElement = [
        ...todoList,
        { id: crypto.randomUUID(), name: input, isDone: false },
      ];
      setTodoList(updatedElement);
      setInput("");
    } else {
      setError("Should contains value between 3 and 50 characters");
    }
  };

  const onDeleteHandler = (e) => {
    const updatedTodoList = todoList.filter((item) => item.id !== e.target.id);
    setTodoList(updatedTodoList);
  };

  const handleChangeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const todoClasses = classNames(styles.list, {
    [styles.empty]: todoList.length === 0,
  });

  const options = [
    { value: "active", label: "Active" },
    { value: "done", label: "Done" },
    { value: "all", label: "All" },
  ];

  return (
    <div className={todoClasses}>
      <p className={styles.error}>{error}</p>

      <div className={styles.inputWrapper}>
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
        <input
          className={styles.input}
          placeholder="new task"
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          value={input}
        />
        <ButtonComponent
          id={crypto.randomUUID()}
          text="Add To Do"
          variant="add"
          onClick={() => onClickHandler(input)}
          type="button"
        />
      </div>

      {selectedOption === "all" && <p>Tasks: {todoList.length}</p>}

      {selectedOption === "all" && (
        <ul style={{ padding: 0 }}>
          {todoList.map((todo) => (
            <li key={todo.id} className={styles.listRow}>
              <CheckboxComponent todo={todo} setTodoList={setTodoList} />
              <ListItemComponent el={todo}>
                <ButtonComponent
                  id={todo.id}
                  text="Delete"
                  onClick={onDeleteHandler}
                  type="button"
                  variant="delete"
                />
              </ListItemComponent>
            </li>
          ))}
        </ul>
      )}
      {selectedOption === "active" && (
        <ul style={{ padding: 0 }}>
          {todoList
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <li key={todo.id} className={styles.listRow}>
                <CheckboxComponent todo={todo} setTodoList={setTodoList} />
                <ListItemComponent el={todo}>
                  <ButtonComponent
                    id={todo.id}
                    text="Delete"
                    onClick={onDeleteHandler}
                    type="button"
                    variant="delete"
                  />
                </ListItemComponent>
              </li>
            ))}
        </ul>
      )}

      {selectedOption === "done" && (
        <ul style={{ padding: 0 }}>
          {todoList
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <li key={todo.id} className={styles.listRow}>
                <CheckboxComponent todo={todo} setTodoList={setTodoList} />
                <ListItemComponent el={todo}>
                  <ButtonComponent
                    id={todo.id}
                    text="Delete"
                    onClick={onDeleteHandler}
                    type="button"
                    variant="delete"
                  />
                </ListItemComponent>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ListComponent;
