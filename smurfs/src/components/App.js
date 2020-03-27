import React, { Component } from "react";
import logo from '../logo.png';
import "./App.css";
import SmurfList from './SmurfList';
import AddSmurf from './Form';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Village</h1>
        </div>
        <section className='App-section'>
          <AddSmurf />
          <SmurfList />
        </section>
      </div>
    );
  }
}

export default App;
