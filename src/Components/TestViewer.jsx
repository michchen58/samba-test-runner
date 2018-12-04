import TestViewerRow from './TestViewerRow.jsx';

const React = require('react');

const TestViewer = props => (
  <table id="TestViewer">
    <thead>
      <td>Name</td>
      <td>Description</td>
      <td>Current Status</td>
      <td>Last run time</td>
      <td>Re-run test</td>
    </thead>
    <tbody>
      {props.testData.map((testInfo, i) => <TestViewerRow data={testInfo} index={i} runSingleTest={props.runSingleTest} />)}
    </tbody>
  </table>
);

export default TestViewer;
