import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import AddSmurf from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurf />
        <SmurfList />
      </div>
    );
  }
}

export default App;
