import styles from "./Item.module.css";

import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Item = ({ todo, onDelete, onEdit, isDeletingTodo }) => {
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
        <Link
          className={styles.editLink}
          disabled={isDeletingTodo}
          onClick={onEdit}
          to={`${todo.id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Item;
