var React = require('react');
var PropTypes = require('prop-types');
import Layout from './layout';
//import 'bootstrap/dist/css/bootstrap.min.css';


function Index(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <p>Welcome to {props.title}</p>
      <h4>Dashboard</h4>
      <p>The app has the following record counts:</p>
        <ul>
          <li><b>Products: </b> {props.data.product_count}</li>
          <li><b>Product Stock </b><span style={{color:'green'}}>In Stock</span><b>: </b>{props.data.product_instance_available_count}</li>
          <li><b>Product category: </b>{props.data.product_category_count}</li>
        </ul>
    </Layout>
  );
}
module.exports = Index;
