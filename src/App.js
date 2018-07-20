import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from 'react-md';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextField
      id="floating-center-title"
      label="Title"
      lineDirection="center"
      placeholder="Hello World"
      className="md-cell md-cell--bottom"
    />
      </div>
    );
  }
}

export default App;
