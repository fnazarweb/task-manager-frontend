import styles from "./CheckboxComponent.module.css";

const CheckboxComponent = ({ todo, setTodoList }) => {
  const handleChangeCheckbox = (event) => {
    const isDone = event.target.checked;
    setTodoList((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, isDone } : item,
      ),
    );
  };

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={todo.isDone}
        onChange={handleChangeCheckbox}
      />
    </div>
  );
};

export default CheckboxComponent;
