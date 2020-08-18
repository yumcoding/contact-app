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
  render() {
    return (
      <form>
        <input
          placeholder="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          placeholder="phone number"
          name="phone"
          onChnage={this.handleChange}
          value={this.state.phone}
        />
        <div>
          {this.state.name}
          {this.state.phone}
        </div>
      </form>
    );
  }
}

export default PhoneForm;
