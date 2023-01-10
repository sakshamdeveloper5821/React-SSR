import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello {this.props.data}
      </div>
    );
  }
}

export default App;
