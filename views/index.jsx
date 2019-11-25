var React = require('react');
var PropTypes = require('prop-types');
import Layout from './layout';

function Index(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <p>Welcome to {props.title}</p>
      <h4>Dynamic Content</h4>
      <p>The app has the following record counts:</p>
        <ul>
          <li><em>Products: </em> {props.data.product_count}</li>!
          <li><em>Product Stock</em></li>!{props.product_instance_count}
          <li><em>Product Stock available</em></li>!{props.product_instance_available_count}
          <li><em>Product category</em></li>!{props.product_category_count}
        </ul>
    </Layout>
  );
}

module.exports = Index;
