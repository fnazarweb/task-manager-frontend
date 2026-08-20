import styles from "./ButtonComponent.module.css";
import classNames from "classnames";

const ButtonComponent = (props) => {
  const btnClasses = classNames(styles.btn, {
    [styles.delete]: props.variant === "delete",
    [styles.add]: props.variant === "add",
  });
  return (
    <button
      className={btnClasses}
      id={props.id}
      type={props.type}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default ButtonComponent;
