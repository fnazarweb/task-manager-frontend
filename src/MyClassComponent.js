import { Component } from "react";
class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "class" };
  }

  render() {
    return (
      <div>
        <span>This is {this.state.name} component</span>
      </div>
    );
  }
}

export default MyClassComponent;
