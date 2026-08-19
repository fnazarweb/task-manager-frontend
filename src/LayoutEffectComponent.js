import React, { useLayoutEffect, useRef, useState } from "react";

const LayoutEffectComponent = () => {
  const [clicked, setClicked] = useState(false);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    console.log("Layout Effect works");
    const p = document.createElement("p");
    p.textContent = "Paragraph";
    divRef.current.append(p);
  }, [clicked]);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
    console.log("Render Dom when setClicked");
  };
  return (
    <div ref={divRef}>
      <button onClick={handleClick}> Add paragraph</button>
    </div>
  );
};

export default LayoutEffectComponent;
