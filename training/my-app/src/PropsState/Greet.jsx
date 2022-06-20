import React, { Component } from 'react';

// Class component
export class Greet extends Component {
  render() {
    return (
      <>
        <h3>Hello {this.props.pname}!!!</h3>
        <div>City is {this.props.city}</div>
        <div>{this.props.children}</div>
      </>
    );
  }

  static get defaultProps() {
    return {
      pname: 'Hem',
      city: 'Mumbai'
    }
  }
}

// Functional Component
export default function Hello(props) {
  return (
    <h2>Hello {props.pname || 'Ajay'}!!!</h2>
  )
}
