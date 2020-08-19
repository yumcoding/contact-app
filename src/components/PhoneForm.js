import React, { Component } from "react";

class PhoneForm extends Component {
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
    this.props.onCreate({
      name: this.state.name,
      phone: this.state.phone,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          placeholder="phone number"
          name="phone"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <button type="submit">Register</button>
        <div>
          {this.state.name}
          {this.state.phone}
        </div>
      </form>
    );
  }
}

export default PhoneForm;
