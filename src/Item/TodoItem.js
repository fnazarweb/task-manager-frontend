import styles from "./TodoItem.module.css";

import Button from "../Button/Button";

const TodoItem = ({ todo, onDelete, onEdit, isDeletingTodo }) => {
  return (
    <div className={styles.item}>
      <span className={todo.checked ? styles.done : ""}>{todo.title}</span>

      <div className={styles.buttonsWrapper}>
        <Button
          disabled={isDeletingTodo}
          text="Delete"
          onClick={onDelete}
          type="button"
          variant="delete"
        />
        <Button
          disabled={isDeletingTodo}
          text="Edit"
          onClick={onEdit}
          type="button"
          variant="edit"
        />
      </div>
    </div>
  );
};

export default TodoItem;
