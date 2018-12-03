const React = require('react');

// TABLE SHOULD DISPLAY THE FOLLOWING:
// name/description
// current status (in progress, failed, succeeded, not run)
// a button that reruns just that test

// description: 'This sentence is true',
// run: generateTest()

const TestViewer = props => {
  // console.log(props.testData);
  return (
  <table id="TestViewer">
    <thead>
      <td>Name</td>
      <td>Description</td>
      <td>Current Status</td>
      <td>Run test</td>
    </thead>
    <tbody>
      {props.testData.map(testObject => (
        <tr>
          <td>{'[name]'}</td>
          <td>{testObject.description}</td>
          <td></td>
          <td><button onClick={() => testObject.run()}>run test</button></td>
        </tr>
      ))}
    </tbody>
  </table>
);}

export default TestViewer;
