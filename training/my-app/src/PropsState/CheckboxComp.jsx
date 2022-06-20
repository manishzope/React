import React, { Component } from 'react';

export class CheckboxComp extends Component {
  constructor() {
    super();
    this.state = { isChecked: true };
  }

  render() {
    let message = '';

    if (this.state.isChecked) {
      message = 'Checkbox is checked';
    } else {
      message = 'Checkbox is un-checked';
    }

    return (
      <div>
        <label htmlFor="">Select the checkbox </label>
        <input
          type="checkbox"
          defaultChecked={this.state.isChecked}
          onChange={this.handleChange.bind(this)}
        />
        <h5>{message}</h5>
      </div>
    );
  }

  handleChange() {
    console.log('Handle Change');
    this.setState({ isChecked: !this.state.isChecked });
  }
}
