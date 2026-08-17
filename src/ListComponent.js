import { useState } from "react";

import ListItemComponent from "./ListItemComponent";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);

  const onClickHandler = (input) => {
    if (input) {
      const updatedElement = [...item, input];
      setItem(updatedElement);
      setInput("");
      setItemNumber(itemNumber + 1);
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

  return (
    <>
      <input
        placeholder="new task"
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        value={input}
      />

      <p>{itemNumber}</p>
      <ul>
        {item.map((el, index) => (
          <ListItemComponent el={el} key={index} />
        ))}
      </ul>

      <button onClick={() => onClickHandler(input)}>Add TO DO</button>
    </>
  );
};

export default ListComponent;
