import React, { Component } from "react";

class PhoneForm extends Component {
  input = null;

  state = {
    name: "",
    phone: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = this.state;
    this.props.onCreate({ name, phone });
    this.setState({
      name: "",
      phone: "",
    });
    this.input.focus();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          ref={(ref) => (this.input = ref)}
        />
        <input
          name="phone"
          placeholder="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default PhoneForm;
