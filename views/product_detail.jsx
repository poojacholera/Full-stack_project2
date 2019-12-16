var React = require('react');
var PropTypes = require('prop-types');
import Layout from './layout';
import TableView from './table_view';


function DetailList(props) {
  const prod_category_list = props.product.productcategory;
  const prod_category_items = prod_category_list.map((prod_category)=>
    <span><a href={prod_category.url}>{prod_category.name}</a>, </span>
  );
  let countNum = 0;
  const prod_instance_list = props.product_instance;
  const prod_instance_items = prod_instance_list.map((prod_instance)=>
    <tr>
      <td>{++countNum}</td>
      <td><a href={prod_instance.url}>{prod_instance.name}</a></td>
      <td>{prod_instance.summary}</td>
    </tr>
  );
  const table_heading = (
      <tr>
        <th>#</th>
        <th>product name</th>
        <th>status</th>
      </tr>
  );
  return (
    <Layout>
      <h1>Product: <b>{props.product.name}</b></h1>
      <p><b>Category:</b> {prod_category_items}</p>
      <p><b>Summary:</b><br/>{props.product.summary}</p>
      <br/>
      <p>The app has the following product instances:</p>
        <TableView thead={table_heading}>
            {prod_instance_items}
          </TableView>

    </Layout>
  );
}
module.exports = DetailList;
