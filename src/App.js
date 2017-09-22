import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number : 0,
    }
  }

  plus() {
    let num = this.state.number;
    num++;
    this.state = {
      number : num,
    }
  }

  render() {
    return (
      <div>
        <text> {this.state.number} </text>
        <button onClick={this.plus}> Plus </button>
        <button> Minus </button>
      </div>
    );
  }
}

export default App;
