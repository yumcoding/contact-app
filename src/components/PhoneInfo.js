import React, { Component } from "react";

class PhoneInfo extends Component {
  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };
  render() {
    const { name, phone } = this.props.info;
    const style = {
      border: "1px solid black",
      padding: "0.5rem",
      margin: "0.5rem",
    };
    return (
      <div style={style}>
        <div>{name}</div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default PhoneInfo;
