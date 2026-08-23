import styles from "./CheckboxComponent.module.css";

const CheckboxComponent = ({ id }) => {
  const handleChangeCheckbox = (event) => {
    // const isDone = event.target.checked;
    // setTodoList((prevTodos) =>
    //   prevTodos.map((item) =>
    //     item.id === todo.id ? { ...item, isDone } : item,
    //   ),
    // );
  };

  return (
    <input
      type="checkbox"
      name="checkbox"
      id={id}
      // checked={todo.isDone}
      onChange={handleChangeCheckbox}
    />
  );
};

export default CheckboxComponent;
