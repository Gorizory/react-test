import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number : 0,
    }
  }

  plus() {
    this.setState({
      number : this.state.number + 1,
    });
  }

  minus() {
    this.setState({
      number : this.state.number - 1,
    });
  }

  render() {
    return (
      <div>
        <div> {this.state.number} </div>
        <button onClick={this.plus.bind(this)}> Plus </button>
        <button onClick={this.minus.bind(this)}> Minus </button>
      </div>
    );
  }
}

export default App;
