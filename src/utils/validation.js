export const validateTodoFields = (
  inputTitle,
  inputDesc,
  currentTitleError,
  currentDescError,
) => {
  const message = "Fields should contains value between 3 and 50 characters";
  const titleInvalid = !inputTitle || currentTitleError !== "";
  const descInvalid = !inputDesc || currentDescError !== "";

  return {
    titleError: titleInvalid ? message : "",
    descError: descInvalid ? message : "",
  };
};

export const getFieldLengthError = (value) => {
  if (value.length > 0 && value.length <= 3)
    return "Must be more then 3 characters";
  if (value.length >= 50) return "Must be less then 50 characters";
  return "";
};

export const hasFormChanges = (
  value,
  initialTitle,
  initialDesc,
  initialChecked,
) => {
  return (
    value.inputTitle !== initialTitle ||
    value.inputDesc !== initialDesc ||
    value.checked !== initialChecked
  );
};
