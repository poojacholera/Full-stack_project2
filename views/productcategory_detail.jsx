var React = require('react');
var PropTypes = require('prop-types');
import Layout from './layout';
import TableView from './table_view';


function ProductCategoryDetail(props) {
  const prod_categorydetail_list = props.category_products;
  let countNum = 0;
  const prod_categorydetail_items = prod_categorydetail_list.map((prod_categorydetail)=>
    <tr>
      <td>{++countNum}</td>
      <td><a href={prod_categorydetail.url}>{prod_categorydetail.name}</a></td>
      <td>{prod_categorydetail.summary}</td>
    </tr>
  );
  const table_heading = (
      <tr>
        <th>#</th>
        <th>product name</th>
        <th>summary</th>
      </tr>
  );
  return (
    <Layout>
      <h1>Category: <b>{props.category.name}</b></h1>

      <p>The app has the following products:</p>
        <TableView thead={table_heading}>
            {prod_categorydetail_items}
          </TableView>

    </Layout>
  );
}
module.exports = ProductCategoryDetail;
