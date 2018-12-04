const React = require('react');

const TestViewerRow = props => {
  return (
    <tr>
      <td>{`Test #${props.index + 1}`}</td>
      <td>{props.data.description}</td>
      <td>{props.data.status || 'not run'}</td>
      <td>
        {
          <button onClick={() => props.runTestCb(props.data, props.index)}>
            run
          </button>
        }
      </td>
    </tr>
  );
}

export default TestViewerRow;
