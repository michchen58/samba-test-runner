import React, { Component } from 'react';
import './App.css';
import TestViewer from './Components/TestViewer.jsx';
import TestSuiteResults from './Components/TestSuiteResults.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      testData: [
        {
          description: 'The One with Ross\'s Teeth',
          run: this.generateTest()
        },
        {
          description: 'The One with the East German Laundry Detergent',
          run: this.generateTest()
        },
        {
          description: 'The One with the Dozen Lasagnas',
          run: this.generateTest()
        },
        {
          description: 'The One with the List',
          run: this.generateTest()
        },
        {
          description: 'The One with the Chicken Pox',
          run: this.generateTest()
        },
        {
          description: 'The One with the Monkey',
          run: this.generateTest()
        },
        {
          description: 'The One Where Heckles Dies',
          run: this.generateTest()
        },
      ],
      totalTestsRun: 0,
      totalTestsPassed: 0
    }
    this.generateTest = this.generateTest.bind(this);
    this.runSingleTest = this.runSingleTest.bind(this);
    this.runTestSuite = this.runTestSuite.bind(this);
  }

  generateTest(baseDelay = 1000) {
    return function runTest(index, callback) {
      const delay = baseDelay + (Math.random() * baseDelay);
      const testPassed = Math.random() > 0.5;
      return new Promise(function(resolve) {
        let app = this;
        setTimeout(function() {
          resolve(testPassed);
          let testDataCopy = app.state.testData.slice();
          testDataCopy[index].status = testPassed ? 'succeeded' : 'failed';
          testDataCopy[index].lastRunTime = delay;
          app.setState({
            testData: testDataCopy,
            totalTestsRun: app.state.totalTestsRun + 1,
            totalTestsPassed: app.state.totalTestsPassed + (testPassed ? 1 : 0)
          })
        }, delay);
      }.bind(this));
    }.bind(this);
  }

  runSingleTest(test, index) {
    test.run(index);
    let testDataCopy = this.state.testData.slice();
    testDataCopy[index].status = 'in progress';
    this.setState({
      testData: testDataCopy
    });
  }

  runTestSuite() {
    // to avoid setting state a separate time on each test
    let app = this;
    let testDataCopy = app.state.testData.slice();

    testDataCopy.forEach((test, index) => {
      testDataCopy[index].status = 'in progress';
      test.run(index);
    });

    this.setState({
      testData: testDataCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Test Runner</h1>
        <button onClick={() => this.runTestSuite()}>Run test suite</button>
        <TestViewer testData={this.state.testData} runSingleTest={this.runSingleTest}/>
        <TestSuiteResults totalTestsRun={this.state.totalTestsRun} totalTestsPassed={this.state.totalTestsPassed} />
      </div>
    );
  }
}

export default App;
