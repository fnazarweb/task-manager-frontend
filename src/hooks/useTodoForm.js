import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  hasFormChanges,
  validateTodoFields,
  getFieldLengthError,
} from "../utils/validation";
import {
  useAddTodoMutation,
  useUpdateTodoMutation,
} from "../redux/todos/todosApi";

export const useTodoForm = ({ initialData }) => {
  const [addTodo, { isLoading: isAddingTodo }] = useAddTodoMutation();
  const [updateTodo, { isLoading: isUpdatingTodo }] = useUpdateTodoMutation();

  const navigate = useNavigate();
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
      await addTodo({
        title: value.inputTitle,
        description: value.inputDesc,
        checked: value.checked,
        creationDate: new Date().toLocaleString(),
      }).unwrap();

      setValue((prevState) => ({
        ...prevState,
        inputTitle: "",
        inputDesc: "",
        checked: false,
        titleError: "",
        descError: "",
      }));
    } catch (error) {
      navigate("/error", {
        state: {
          error:
            error.data?.message || `Invalid error with code ${error.status}`,
        },
        replace: true,
      });
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
      await updateTodo({
        id: initialData.id,
        title: value.inputTitle,
        description: value.inputDesc,
        checked: value.checked,
        creationDate: new Date().toLocaleString(),
      }).unwrap();
      navigate("/todoList");
    } catch (error) {
      navigate("/error", {
        state: {
          error:
            error.data?.message || `Invalid error with code ${error.status}`,
        },
        replace: true,
      });
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
