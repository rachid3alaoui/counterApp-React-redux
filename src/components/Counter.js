import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <h2> Counter </h2>
        <h3> Counter : {this.props.count} </h3>
        <button onClick={this.props.increment}>Increment + </button>
        <button onClick={this.props.decrement}>Decrement - </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
