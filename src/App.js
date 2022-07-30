import React, { Component } from 'react';
import './App.css';

import Articles from './components/ArticlesFun';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <Articles />
      </div>
  </React.Fragment>
    );
  }
}

export default App;