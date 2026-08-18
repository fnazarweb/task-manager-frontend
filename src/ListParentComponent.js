import React from "react";
import ListComponent from "./ListComponent";

const ListParentComponent = () => {
  const todoList = [
    { id: crypto.randomUUID(), name: "to do homework" },
    { id: crypto.randomUUID(), name: "understand props" },
    { id: crypto.randomUUID(), name: "to do delete button" },
  ];

  return <ListComponent todoList={todoList} />;
};

export default ListParentComponent;
