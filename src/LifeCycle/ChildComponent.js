import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }
  static shouldComponentUpdate() {
    console.log("getDerivedStateFromProps child");
    return null;
  }
  render() {
    return (
      <div>
        <h3>child number: {this.state.number}</h3>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate child");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
