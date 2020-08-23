import React from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends React.Component {
  id = 3;
  state = {
    information: [
      { id: 0, name: "jane doe", phone: "010-0000-0000" },
      { id: 1, name: "john doe", phone: "010-0000-0001" },
      { id: 2, name: "hong doe", phone: "010-0000-0002" },
    ],
  };
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ ...data, id: this.id++ }),
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
