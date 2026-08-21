import styles from "./ListItemComponent.module.css";

const ListItemComponent = ({ el, children }) => {
  return (
    <div className={styles.item}>
      <span className={el.isDone ? styles.done : ""}>{el.name}</span>
      {children}
    </div>
  );
};

export default ListItemComponent;
