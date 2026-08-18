import React from "react";
// import GrandChildComponent from "./GrandChildComponent";

const TodosList = (props) => {
  return (
    <>
      <div>{props.renderOneTodo}</div>;
      {/* <GrandChildComponent newPropTodo={props.renderOneTodo} />; */}
    </>
  );
};

export default TodosList;
