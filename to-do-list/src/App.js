import React, { Component } from 'react';
import './App.css';
import Show from './Show.js';
import Form from './Form.js';


class App extends Component {

  constructor () {

    super();
    this.state = {
list: ["This is to test the list", "I'm not going to do titles", "add to it with add button", "delete by clicking on the div", "you\'ll figure it out"],
    }
  }


cutIt = (event) => {
  const state = this.state
  state.list.splice(event.target.id, 1)
  this.setState(state);
}


pushToList = (item) => {
  const state = this.state
  state.list.push(item);
  this.setState(state);
}

  render() {
    return (
      <div>
      <Show list={this.state.list} cutIt={this.cutIt} />
      <Form pushToList={this.pushToList} />
      </div>
    );
  }
}

export default App;
