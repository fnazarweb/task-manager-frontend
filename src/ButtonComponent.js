import React from "react";

const ButtonComponent = (props) => {
  return (
    <button id={props.id} type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default ButtonComponent;
