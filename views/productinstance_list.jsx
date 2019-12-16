var React = require('react');
var PropTypes = require('prop-types');
import Layout from './layout';
import TableView from './table_view';


function ProductInstanceList(props) {
  /*const table_row = ({ children })=> (
    <tr>
      {children}
    </tr>
  );
  */
  const prod_instance_list = props.productinstance_list
  let countNum = 0;
  const prod_instance_items = prod_instance_list.map((prod_instance)=>
    <tr>
      <td>{++countNum}</td>
      <td>{prod_instance.product.name}</td>
      <td>{prod_instance.batch_num}</td>
      <td>{prod_instance.mfg_date_formatted}</td>
      <td>{prod_instance.exp_date_formatted}</td>
      <td>{prod_instance.status}</td>
    </tr>
  );
  const table_heading = (
      <tr>
        <th>#</th>
        <th>product name</th>
        <th>Batch #</th>
        <th>Mfg. Date</th>
        <th>Exp. Date</th>
        <th>Status</th>
      </tr>
  );
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <p>The app has the following products:</p>
        <TableView thead={table_heading}>
          {prod_instance_items}
        </TableView>
    </Layout>
  );
}
module.exports = ProductInstanceList;
