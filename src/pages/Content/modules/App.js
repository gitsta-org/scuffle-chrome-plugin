/*global chrome*/

import React, { Component } from 'react';
// import logo from './logo.svg';
import Bookmark from './bookmark';

class App extends Component {
  debugger;
  render() {
    return (
      <div className="App">
        <Bookmark document={this.props.document} window={this.props.window}/>
      </div>
    );
  }
}

export default App;
