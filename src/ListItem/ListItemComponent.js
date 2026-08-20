import styles from "./ListItemComponent.module.css";

const ListItemComponent = (props) => {
  return (
    <div className={styles.item}>
      <li>
        <span>{props.el}</span>
      </li>

      {props.children}
    </div>
  );
};

export default ListItemComponent;
