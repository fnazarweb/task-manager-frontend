import { useState } from "react";
import { useTodoMutations } from "../hooks/useTodoMutations";
import {
  hasFormChanges,
  validateTodoFields,
  getFieldLengthError,
} from "../utils/validation";

export const useTodoForm = ({ initialData }) => {
  const initialTitle = initialData?.title ?? "";
  const inintialDesc = initialData?.description ?? "";
  const initialChecked = initialData?.checked ?? false;
  const [value, setValue] = useState({
    inputTitle: initialTitle,
    inputDesc: inintialDesc,
    checked: initialChecked,
    titleError: "",
    descError: "",
  });

  const { createMutateAsync, updateMutateAsync, isAddingTodo, isUpdatingTodo } =
    useTodoMutations();

  const validate = () => {
    const { titleError, descError } = validateTodoFields(
      value.inputTitle,
      value.inputDesc,
      value.titleError,
      value.descError,
    );
    if (titleError || descError) {
      setValue((prevState) => ({ ...prevState, titleError, descError }));
      return false;
    }
    return true;
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await createMutateAsync({
        title: value.inputTitle,
        description: value.inputDesc,
        checked: value.checked,
        creationDate: new Date().toLocaleString(),
      });

      setValue((prevState) => ({
        ...prevState,
        inputTitle: "",
        inputDesc: "",
        checked: false,
        titleError: "",
        descError: "",
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }

    if (!hasFormChanges(value, initialTitle, inintialDesc, initialChecked)) {
      return;
    }

    e.preventDefault();
    try {
      await updateMutateAsync({
        id: initialData.id,
        title: value.inputTitle,
        description: value.inputDesc,
        checked: value.checked,
        creationDate: new Date().toLocaleString(),
      });
      window.location.href = "/todoList";
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value: fieldValue } = e.target;
    const errorField = name === "inputTitle" ? "titleError" : "descError";
    const error = getFieldLengthError(fieldValue);
    setValue((prevState) => ({
      ...prevState,
      [name]: fieldValue,
      [errorField]: error,
    }));
  };

  const handleChangeCheckbox = (e) => {
    setValue((prevState) => ({ ...prevState, checked: e.target.checked }));
  };

  return {
    value,
    onChangeHandler,
    handleChangeCheckbox,
    handleAdd,
    handleUpdate,
    isAddingTodo,
    isUpdatingTodo,
  };
};
