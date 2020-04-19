import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isFetching } from '../actions'

import logo from '../logo.png';
import './App.css';

import SmurfList from './SmurfList';
import AddSmurf from './Form';

class App extends Component {

  componentDidMount() {
    this.props.isFetching();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Village</h1>
        </div>
        <section className='App-section'>
          <AddSmurf />
          { this.props.error ? <h2>{this.props.error}</h2> : <SmurfList /> }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = {
  isFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
