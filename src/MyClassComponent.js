import { Component } from "react";
import ButtonComponent from "./ButtonComponent";
import ListItemClassComponent from "./ListItemClassComponent";

class MyClassComponent extends Component {
  firstTodos = [
    { id: crypto.randomUUID(), name: "to do homework" },
    { id: crypto.randomUUID(), name: "understand props" },
    { id: crypto.randomUUID(), name: "to do delete button" },
  ];

  state = {
    todos: this.firstTodos,
    input: "",
    timer: 0,
  };

  componentDidMount() {
    this.invervalId = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
    const lsTodos = localStorage.getItem("todos");
    if (lsTodos) {
      this.setState({ todos: JSON.parse(lsTodos) });
      console.log("componentDidMount");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      console.log("componentDidUpdate");
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTask() {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: crypto.randomUUID(), name: this.state.input },
      ],
    });
    this.setState({ input: "" });
  }

  onChangeHandler(e) {
    const value = e.target.value;
    this.setState({ input: value });
  }

  onKeyDownHandler(e) {
    if (e.key === "Enter") {
      this.addTask();
    }
  }

  deleteTask(e) {
    const updatedTodoList = this.state.todos.filter(
      (item) => item.id !== e.target.id,
    );
    this.setState({ todos: updatedTodoList });
  }

  deleteAll() {
    this.setState({ todos: [] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  componentWillUnmount() {
    clearInterval(this.invervalId);
  }

  render() {
    return (
      <div>
        <h2>{this.state.timer}</h2>
        <input
          value={this.state.input}
          onChange={this.onChangeHandler.bind(this)}
          onKeyDown={this.onKeyDownHandler.bind(this)}
        />
        <button onClick={this.addTask.bind(this)}>Add todo</button>
        {console.log(this.state.todos)}
        {this.state.todos.map((todo) => (
          <ListItemClassComponent key={todo.id} el={todo.name}>
            <ButtonComponent
              id={todo.id}
              type={"button"}
              onClick={this.deleteTask.bind(this)}
              text={"Delete"}
            />
          </ListItemClassComponent>
        ))}
        <button
          style={{ display: "block", margin: "10px auto 10px" }}
          onClick={this.deleteAll.bind(this)}
        >
          Clear Todo List
        </button>
      </div>
    );
  }
}

export default MyClassComponent;
