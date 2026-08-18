import { useState } from "react";

import ListItemComponent from "./ListItemComponent";
import ButtonComponent from "./ButtonComponent";

const ListComponent = () => {
  const firstTodos = [
    { id: crypto.randomUUID(), name: "to do homework" },
    { id: crypto.randomUUID(), name: "understand props" },
    { id: crypto.randomUUID(), name: "to do delete button" },
  ];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(firstTodos);

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
  };

  return (
    <>
      <input
        placeholder="new task"
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        value={input}
      />

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
            />
          </ListItemComponent>
        ))}
      </ul>

      <button onClick={() => onClickHandler(input)}>Add TO DO</button>
    </>
  );
};

export default ListComponent;
