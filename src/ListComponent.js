import { useState } from "react";

import ListItemComponent from "./ListItemComponent";

const ListComponent = (props) => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(props.todoList);

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
            id={todo.id}
            onDeleteHandler={onDeleteHandler}
          />
        ))}
      </ul>

      <button onClick={() => onClickHandler(input)}>Add TO DO</button>
    </>
  );
};

export default ListComponent;
