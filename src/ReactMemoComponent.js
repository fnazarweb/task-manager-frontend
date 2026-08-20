import { useState, memo } from "react";

const ChildComponent = memo(() => {
  console.log("Child render");
  return <p>I'm Child</p>;
});

const ReactMemoComponent = () => {
  const [words, setWords] = useState(["One", "Two", "Three", "Four"]);
  console.log("render");
  const handleDelete = (index) => {
    setWords((prevWords) => {
      return prevWords.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      {words.map((word, index) => {
        return (
          <div key={index}>
            <p>{word}</p>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <ChildComponent />
    </div>
  );
};

export default ReactMemoComponent;
