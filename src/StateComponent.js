import React from "react";
import { useState } from "react";

const StateComponent = () => {
  const [greeting, setGreeting] = useState("");

  const handleClick = () => {
    const names = ["Nazar", "Andrii", "Oleh", "John", "Vasya"];
    const randomName = names[Math.floor(Math.random() * names.length)];

    setGreeting("Hello " + randomName);
  };

  return (
    <div>
      <p>{greeting}</p>
      <button onClick={handleClick}> Greet </button>
    </div>
  );
};

export default StateComponent;
