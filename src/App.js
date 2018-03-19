import React, { Component } from 'react';
import Header from './components/header';
import Posts from './components/posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Posts/>
      </div>
    );
  }
}

export default App;
