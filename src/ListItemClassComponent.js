import React, { Component } from "react";

export class ListItemClassComponent extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <li>{this.props.el}</li>
        {this.props.children}
      </div>
    );
  }
}

export default ListItemClassComponent;
