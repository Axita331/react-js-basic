import React, { Component } from 'react'

export default class Counter extends Component {
  
  render() {
    return (
      <div>
        {console.log(this.props.users)}
        <p>{this.props.counter}</p>
        <button onClick={() => {
          console.log('inside the UI button');
          this.props.increment()
        }}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
        <button onClick={() => this.props.reset()}>Reset</button>
      </div>
    )
  }
}
