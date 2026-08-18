import React from "react";

const GrandChildComponent = (props) => {
  console.log("props:", props);

  return (
    <>
      <div>{props.myName.name}</div>
      <div>{props.myNameArray[0]}</div>
      <div>{props.myFunctionName()}</div>
    </>
  );
};

export default GrandChildComponent;
