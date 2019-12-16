var React = require('react');
var PropTypes = require('prop-types');
import Layout from './layout';


function ProductList(props) {
  const products = props.product_list
  const listItems = products.map((product)=>
    <li key={product.id.toString()}><a href={product.url}>{product.name}</a></li>
  );
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <p>The app has the following products:</p>
        <ul>{listItems}</ul>
    </Layout>
  );
}
module.exports = ProductList;
