import styles from "./ListItemComponent.module.css";

import CheckboxComponent from "../Checkbox/CheckboxComponent";
import ButtonComponent from "../Button/ButtonComponent";

const ListItemComponent = ({ todo, onDelete }) => {
  return (
    <div className={styles.item}>
      <CheckboxComponent todo={todo} />
      <span className={todo.checked ? styles.done : ""}>
        {todo.description}
      </span>

      <ButtonComponent
        text="Delete"
        onClick={onDelete}
        type="button"
        variant="delete"
      />
    </div>
  );
};

export default ListItemComponent;
