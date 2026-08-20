import { useEffect, useState } from "react";

import ListItemComponent from "../ListItem/ListItemComponent";
import ButtonComponent from "../Button/ButtonComponent";

import styles from "./ListComponent.module.css";
import classNames from "classnames";

const ListComponent = () => {
  const firstTodos = [
    { id: crypto.randomUUID(), name: "to do homework" },
    { id: crypto.randomUUID(), name: "understand props" },
    { id: crypto.randomUUID(), name: "to do delete button" },
  ];

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const lsTodos = localStorage.getItem("todos");
    return lsTodos ? JSON.parse(lsTodos) : firstTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
    console.log("useEffect");
  }, [todoList]);

  const onClickHandler = (input) => {
    if (input) {
      const updatedElement = [
        ...todoList,
        { id: crypto.randomUUID(), name: input },
      ];
      setTodoList(updatedElement);
      setInput("");
    }
  };
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler(input);
    }
  };

  const onDeleteHandler = (e) => {
    const updatedTodoList = todoList.filter((item) => item.id !== e.target.id);
    setTodoList(updatedTodoList);
    if (updatedTodoList.length === 0) {
    }
  };

  const todoClasses = classNames(styles.list, {
    [styles.empty]: todoList.length === 0,
  });

  return (
    <div className={todoClasses}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder="new task"
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          value={input}
        />
        <ButtonComponent
          id={crypto.randomUUID()}
          text={"Add To Do"}
          variant={"add"}
          onClick={() => onClickHandler(input)}
          type={"button"}
        />
      </div>

      <p>{todoList.length}</p>
      <ul>
        {todoList.map((todo) => (
          <ListItemComponent
            key={todo.id}
            el={todo.name}
            onDeleteHandler={onDeleteHandler}
          >
            <ButtonComponent
              id={todo.id}
              text={"Delete"}
              onClick={onDeleteHandler}
              type={"button"}
              variant={"delete"}
            />
          </ListItemComponent>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
