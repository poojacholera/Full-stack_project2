var React = require('react');
var PropTypes = require('prop-types');
import Layout from './layout';
import TableView from './table_view';


function ProductCategoryList(props) {
  /*const table_row = ({ children })=> (
    <tr>
      {children}
    </tr>
  );
  */
  const prod_category_list = props.productcategory_list
  let countNum = 0;
  const prod_category_items = prod_category_list.map((prod_category)=>
    <tr>
      <td>{++countNum}</td>
      <td><a href={prod_category.url}>{prod_category.name}</a></td>
    </tr>
  );
  const table_heading = (
      <tr>
        <th>#</th>
        <th>category name</th>
      </tr>
  );
  return (
    <Layout>
      <h1>{props.title}</h1>
      <p>The app has the following products:</p>
        <TableView thead={table_heading}>
          {prod_category_items}
        </TableView>
    </Layout>
  );
}
module.exports = ProductCategoryList;
