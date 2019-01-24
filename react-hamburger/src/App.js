import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div>
      <Person name="Nadia"  age="31"/>
      <Person name="Snoopy"  age="7">My hobbies are sleeping </Person>
      <Person name="Yoshi"  age="28"/>
      </div>
    );
  }
}

export default App;
