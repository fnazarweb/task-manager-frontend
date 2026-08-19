import React, { useReducer, useRef } from "react";

const initialState = { name: "", lastName: "", birthYear: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      if (action.value) {
        return { ...state, name: action.value };
      } else return { ...state };

    case "changeLastname":
      if (action.value) {
        return { ...state, lastName: action.value };
      } else return { ...state };

    case "changeBirthYear":
      if (action.value) {
        return {
          ...state,
          birthYear: action.value,
        };
      } else return { ...state };

    default:
      throw new Error("Invalid option value");
  }
};

const ReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nameInputRef = useRef(null);
  const lastnameInputRef = useRef(null);
  const birthYearInputRef = useRef(null);

  const changeName = () => {
    dispatch({ type: "changeName", value: nameInputRef.current.value });
    nameInputRef.current.value = "";
  };
  const changeLastname = () => {
    dispatch({ type: "changeLastname", value: lastnameInputRef.current.value });
    lastnameInputRef.current.value = "";
  };
  const changeBirthYear = () => {
    dispatch({
      type: "changeBirthYear",
      value: birthYearInputRef.current.value,
    });
    birthYearInputRef.current.value = "";
  };

  return (
    <div>
      <p>Name: {state.name}</p>
      <p>Last name: {state.lastName}</p>
      <p>Birth year: {state.birthYear}</p>
      <div>
        <button onClick={changeName}>Name</button>
        <input ref={nameInputRef}></input>
      </div>

      <div>
        <button onClick={changeLastname}>Lastname</button>
        <input ref={lastnameInputRef}></input>
      </div>

      <div>
        <button onClick={changeBirthYear}>Birth year</button>
        <input ref={birthYearInputRef}></input>
      </div>
    </div>
  );
};

export default ReducerComponent;
