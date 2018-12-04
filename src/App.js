import React, { Component } from 'react';
import './App.css';
import TestViewer from './Components/TestViewer.jsx';
import tests from './Tests/sample.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      testData: [
        {
          description: 'This sentence is true',
          run: this.generateTest()
        },
        {
          description: 'The preceding sentence is false',
          run: this.generateTest()
        },
        {
          description: 'Achilles never catches the tortoise',
          run: this.generateTest()
        }
      ]
    }
    this.runTest = this.runTest.bind(this);
    this.generateTest = this.generateTest.bind(this);
  }

  generateTest(baseDelay = 1000, context) {
    return function runTest(index) {
      const delay = baseDelay + (Math.random() * baseDelay);
      const testPassed = Math.random() > 0.5;
      return new Promise(function(resolve) {
        let app = this;
        setTimeout(function() {
          resolve(testPassed);
          let newTestData = app.state.testData.slice();
          newTestData[index].status = testPassed ? 'succeeded' : 'failed'; // or 'failed'?
          app.setState({
            testData: newTestData
          })
        }, delay);
      }.bind(this));
    }.bind(this);
  }

  runTest(test, testIndex) {
    console.log('run a test')
    test.run(testIndex);
    let newTestData = this.state.testData.slice();

    newTestData[testIndex].status = 'in progress';

    this.setState({
      testData: newTestData
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Test Runner</h1>
        <TestViewer testData={this.state.testData} runTestCb={this.runTest}/>
      </div>
    );
  }
}

export default App;
