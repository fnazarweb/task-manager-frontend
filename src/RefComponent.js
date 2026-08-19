import React, { useRef } from "react";

const RefComponent = () => {
  const inputRef = useRef(null);

  const onClickFocus = () => {
    inputRef.current.focus();
  };

  const onClickBlur = () => {
    inputRef.current.blur();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Focused or Blured now?" />
      <button onClick={onClickFocus}>Focus</button>
      <button onClick={onClickBlur}>Blur</button>
    </div>
  );
};

export default RefComponent;
