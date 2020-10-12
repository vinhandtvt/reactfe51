import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  state = {
    ten: "Nhan vi văn",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>Props</h2>
        <FunctionProps
          // cách truyền props trong reactjs
          hoVaTen={this.state.ten}
          lopHoc={this.state.lop}
        />
        <ClassProps // cách truyền props trong reactjs
          hoVaTen={this.state.ten}
          lopHoc={this.state.lop}
        />
      </div>
    );
  }
}
