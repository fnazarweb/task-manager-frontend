import React, { useMemo, useState } from "react";

const MemoComponent = () => {
  const [numbers, setNumbers] = useState([5, 3, 4, 1, 5]);
  const [state, setState] = useState(false);

  console.log("rerender");

  const sum = useMemo(() => {
    console.log("Counting");
    return numbers.reduce((acc, number) => acc + number, 0);
  }, [numbers]);

  const handleClick = () => {
    setNumbers([...numbers, 10]);
    console.log("recount sum");
  };
  const handleToggleState = () => {
    setState(!state);
  };

  return (
    <div>
      <p>Array: {numbers.join(", ")}</p>
      <p>Sum: {sum}</p>

      <button onClick={handleClick}>Add number to array</button>
      <button onClick={handleToggleState}>Rerender</button>
    </div>
  );
};

export default MemoComponent;
