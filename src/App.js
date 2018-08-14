import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Greeting from './Greeting.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting/>
      </div>
    );
  }
}

export default App;
