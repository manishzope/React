import React, { Component } from 'react'

export class MyComp extends Component {
  render() {
    return (
      <h1>This is MyComp Class based</h1>
    )
  }
}


export function Greetings() {
  return (
    <h2>This is Greetings functional</h2>
  )
}


const Welcome = () => {
  return (
    <h3>This is Welcome arrow functional</h3>
  )
}

export default Welcome;