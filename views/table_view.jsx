var React = require('react');
var PropTypes = require('prop-types');
//import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const theadStyles = {
  "paddingTop":"12px",
  "paddingBottom":"12px",
  "textAlign":"left",
  "backgroundColor":"#4CAF50",
  "color":"white",
  "border":"1px solid #ddd",
}

function TableView(props) {
  return (
    <div>
  <Table striped bordered hover responsive=" md lg xl" size="sm">
  <thead className = "thead" style={theadStyles}>{props.thead}</thead>
    <tbody >
      {props.children}
    </tbody>
  </Table>
</div>

  );
}

module.exports = TableView;
