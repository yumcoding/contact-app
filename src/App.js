import React from "react";
import PhoneForm from "./components/PhoneForm";

class App extends React.Component {
  state = {
    information: [],
  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({ information: information.concat(data) });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
