import React, { Component } from 'react';
import './App.css';
import TestViewer from './Components/TestViewer.jsx';
import tests from './Tests/sample.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Runner</h1>
        <TestViewer testData={tests} />
      </div>
    );
  }
}

export default App;
