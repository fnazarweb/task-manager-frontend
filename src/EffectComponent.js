import React, { useEffect, useState } from "react";

const EffectComponent = () => {
  const [state, setState] = useState(true);

  useEffect(() => {
    console.log("Use effect works");
  }, [state]);

  const handleClick = () => {
    setState((prevState) => !prevState);
  };
  return (
    <div>
      <button onClick={handleClick}>Change state</button>
    </div>
  );
};

export default EffectComponent;
