/*global chrome*/

import React, { Component } from 'react';
// import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        {this.props.window.url}
        <p className="App-intro">Bookmark url: {this.props.document.URL}</p>
        <p>name: {this.props.document.title}</p>
      </div>
    );
  }
}

export default App;

