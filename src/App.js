import React, { Component } from 'react';
import sunil from './sunil.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={sunil} height="200px" width="250px" alt=""/>
          <p>
            This is Sunil Kumar Thing.
            I am creating my first react App. I am working in america at home.
          </p>
          <a
            className="App-link"
            href="http://bimalparajuli.com.np"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to bimalparajuli
          </a>
        </header>
      </div>
    );
  }
}

export default App;
