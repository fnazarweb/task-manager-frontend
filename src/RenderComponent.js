import TodosList from "./TodosList";
import GrandChildComponent from "./GrandChildComponent";

const RenderComponent = () => {
  const toDos = [
    { id: 1, todo: "firstTodo" },
    { id: 2, todo: "secondTodo" },
    { id: 3, todo: "thirdTodo" },
    { id: 4, todo: "fourthTodo" },
  ];

  const myName = {
    name: "Kostya",
  };

  const myNameArray = ["Kostya"];

  const myFunctionName = () => {
    return "Kostya";
  };

  return (
    <div>
      {toDos.map((todo) => {
        return (
          <TodosList
            key={todo.id}
            renderOneTodo={todo.todo}
            id={todo.id}
          ></TodosList>
        );
      })}
      <GrandChildComponent
        myName={myName}
        myNameArray={myNameArray}
        myFunctionName={myFunctionName}
      />
    </div>
  );
};

export default RenderComponent;
