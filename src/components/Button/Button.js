import styles from "./Button.module.css";
import classNames from "classnames";

const Button = (props) => {
  const btnClasses = classNames(styles.btn, {
    [styles.delete]: props.variant === "delete",
    [styles.add]: props.variant === "add",
    [styles.edit]: props.variant === "edit",
  });

  return (
    <button
      className={btnClasses}
      type={props.type}
      variant={props.variant}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
