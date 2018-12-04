import TestViewerRow from './TestViewerRow.jsx';

const React = require('react');

const TestViewer = props => (
  <table id="TestViewer">
    <thead>
      <td>Name</td>
      <td>Description</td>
      <td>Current Status</td>
      <td>Run test</td>
    </thead>
    <tbody>
      {props.testData.map((testInfo, i) => <TestViewerRow data={testInfo} index={i} runTestCb={props.runTestCb} />)}
    </tbody>
  </table>
);

export default TestViewer;
