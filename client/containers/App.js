import React, { Component } from 'react'
import { connect } from 'react-redux'

import { subtractCounter, addCounter } from "../actions/actions";
import Counter from '../components/Counter';

class App extends Component {

  add() {
    this.props.dispatch(addCounter());
  }

  subtract() {
    this.props.dispatch(subtractCounter());
  }

  render() {
    return (
      <div>
        <Counter
          counter={this.props.counter}
          add={this.add.bind(this)}
          decr={this.subtract.bind(this)}
           />
      </div>
    )
  }
}

const mapStateToProps = (state)  => {
  return state;
};

export default connect(mapStateToProps)(App);
