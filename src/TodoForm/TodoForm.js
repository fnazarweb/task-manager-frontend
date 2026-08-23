import { useState } from "react";
import { useMutation } from "react-query";
import { addTodo } from "../api/api";

import { queryClient } from "../index";
import styles from "./TodoForm.module.css";
import ButtonComponent from "../Button/ButtonComponent";
import CheckboxComponent from "../Checkbox/CheckboxComponent";

const TodoForm = () => {
  const [value, setValue] = useState({
    inputTitle: "",
    inputDesc: "",
    titleError: "",
    descError: "",
  });

  const { mutateAsync } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
    onError: (error) => {
      console.log("Something went wrong...", error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const titleInvalid = !value.inputTitle || value.titleError !== "";
    const descInvalid = !value.inputDesc || value.descError !== "";
    if (titleInvalid || descInvalid) {
      setValue((prevState) => ({
        ...prevState,
        titleError: titleInvalid
          ? "Fields should contains value between 3 and 50 characters"
          : prevState.titleError,
        descError: descInvalid
          ? "Fields should contains value between 3 and 50 characters"
          : prevState.descError,
      }));
      return;
    }

    try {
      const newTodo = {
        description: value.inputTitle,
        checked: false,
        creationDate: new Date().toLocaleString(),
      };

      await mutateAsync(newTodo);

      setValue((prevState) => ({
        ...prevState,
        inputTitle: "",
        inputDesc: "",
        titleError: "",
        descError: "",
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const errorMin = "Must be more then 3 characters";
    const errorMax = "Must be less then 50 characters";
    setValue((prevState) => ({ ...prevState, [name]: value }));
    setValue((prevState) => ({ ...prevState, [errorField]: "" }));

    let error = "";
    if (value.length <= 3 && value.length > 0) {
      error = errorMin;
    } else if (value.length >= 50) {
      error = errorMax;
    } else {
      error = "";
    }

    const errorField = name === "inputTitle" ? "titleError" : "descError";
    setValue((prevState) => ({ ...prevState, [errorField]: error }));
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.error}>{value.titleError}</p>

      <div className={styles.field}>
        <div className={styles.labelWrapper}>
          <label className={styles.label} htmlFor="title">
            Title
          </label>
        </div>

        <input
          className={styles.input}
          name="inputTitle"
          id="title"
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
          <label className={styles.label} htmlFor="desc">
            Description
          </label>
        </div>
        <input
          className={styles.input}
          name="inputDesc"
          id="desc"
          placeholder="some description..."
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          value={value.inputDesc}
          type="text"
        />
      </div>
      <div className={styles.field}>
        <div className={styles.labelWrapper}>
          <label className={styles.label} htmlFor="checkbox">
            Is it done?
          </label>
        </div>

        <CheckboxComponent id={"checkbox"} />
      </div>
      <ButtonComponent text="Add To Do" variant="add" type="submit" />
    </form>
  );
};

export default TodoForm;
