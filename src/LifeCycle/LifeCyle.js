import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCyle extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    return (
      <div>
        <header> header component </header>
        <h1>LifeCyle number: {this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
        {/* {this.state.number < 3 ? <ChildComponent /> : ""} */}
        <ChildComponent number={this.state.number} />
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
