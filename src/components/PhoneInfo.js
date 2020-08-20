import React, { Component } from "react";

class PhoneInfo extends Component {
  state = {
    editiong: false,
    name: "",
    phone: "",
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };
  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      });
    } else {
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }
    this.setState({
      editing: !this.state.editing,
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, phone } = this.props.info;
    const { editing } = this.state;
    const style = {
      border: "1px solid black",
      padding: "0.5rem",
      margin: "0.5rem",
    };
    return (
      <div style={style}>
        {editing ? (
          <div>
            <div>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </div>
          </div>
        ) : (
          <div>
            <div>{name}</div>
            <div>{phone}</div>
          </div>
        )}
        <button onClick={this.handleRemove}>Remove</button>
        <button onClick={this.handleToggleEdit}>
          {editing ? "적용" : "수정"}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
