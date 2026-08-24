import { useId } from "react";

import styles from "./TodoForm.module.css";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import { useTodoForm } from "../hooks/useTodoForm";

const TodoForm = ({ initialData, mode, onClose }) => {
  const formId = useId();
  const titleId = `${formId}-title`;
  const descId = `${formId}-desc`;
  const checkboxId = `${formId}-checkbox`;

  const {
    value,
    onChangeHandler,
    handleChangeCheckbox,
    handleAdd,
    handleUpdate,
    isAddingTodo,
    isUpdatingTodo,
  } = useTodoForm({ initialData, onClose });

  const handleSubmit = mode === "create" ? handleAdd : handleUpdate;
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };
  return (
    <form
      className={styles.form}
      onSubmit={mode === "create" ? handleAdd : handleUpdate}
    >
      <p className={styles.error}>{value.titleError}</p>

      <div className={styles.field}>
        <div className={styles.labelWrapper}>
          <label className={styles.label} htmlFor={titleId}>
            Title
          </label>
        </div>

        <input
          className={styles.input}
          name="inputTitle"
          id={titleId}
          placeholder="some title..."
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          value={value.inputTitle}
          type="text"
        />
      </div>

      <p className={styles.error}>{value.descError}</p>

      <div className={styles.field}>
        <div className={styles.labelWrapper}>
          <label className={styles.label} htmlFor={descId}>
            Description
          </label>
        </div>
        <input
          className={styles.input}
          name="inputDesc"
          id={descId}
          placeholder="some description..."
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          value={value.inputDesc}
          type="text"
        />
      </div>
      <div className={styles.field}>
        <div className={styles.labelWrapper}>
          <label className={styles.label} htmlFor={checkboxId}>
            Is it done?
          </label>
        </div>

        <Checkbox
          id={checkboxId}
          checked={value.checked}
          handleChangeCheckbox={handleChangeCheckbox}
        />
      </div>
      <Button
        disabled={isAddingTodo || isUpdatingTodo}
        text={mode === "create" ? "Add To Do" : "Save To Do"}
        variant={mode === "create" ? "add" : "edit"}
        type="submit"
      />
    </form>
  );
};

export default TodoForm;
