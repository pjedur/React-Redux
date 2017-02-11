import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, add, decr } = this.props;

    return (
      <div>
        <h1> { counter } </h1>
        <button onClick={add}> + </button>
        <button onClick={decr}> - </button>
      </div>
    )
  }
}
