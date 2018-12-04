const React = require('react');

const TestSuiteResults = props => (
  <table id="TestSuiteResults"><tbody>
    <tr>
      <td className="label">Total tests run</td>
      <td className="value">{props.totalTestsRun}</td>
    </tr>
    <tr>
      <td className="label">Total tests passed</td>
      <td className="value">{props.totalTestsPassed}</td>
    </tr>
    <tr>
      <td className="label">Percentage passed</td>
      <td className="value">{(props.totalTestsRun > 0) ? `${Math.round((props.totalTestsPassed / props.totalTestsRun) * 100)}%` : 'n/a'}</td>
    </tr>
  </tbody></table>
);

export default TestSuiteResults;
