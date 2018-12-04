const React = require('react');

const TestViewerRow = props => {
  return (
    <tr className={`status_${props.data.status ? props.data.status.replace(/\s/g,'') : ''}`}>
      <td>{`Test #${props.index + 1}`}</td>
      <td>{props.data.description}</td>
      <td className="status">{props.data.status || 'not run'}</td>
      <td>{props.data.lastRunTime ? `${Math.round(props.data.lastRunTime)} ms` : 'n/a'}</td>
      <td>
        {
          <button onClick={() => props.runSingleTest(props.data, props.index)}>
            Run
          </button>
        }
      </td>
    </tr>
  );
}

export default TestViewerRow;
