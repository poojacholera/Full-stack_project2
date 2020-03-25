var React = require("react");
var PropTypes = require("prop-types");
import Layout from "./layout";
import TableView from "./table_view";

function ProductCategoryDetail(props) {
    console.log('props: '+props);
    let countNum = 0;
    const categoryList = props.prod-cat-list;
    const list_items = categoryList.map(item => (
        <tr>
            <td>{++countNum}</td>
            <td>{}</td>
        </tr>
    ));

  const table_heading = (
    <tr>
      <th>category name</th>
    </tr>
  );
  return (
    <Layout>
      <h1>
        Category: <b>{props.category.name}</b>
      </h1>
      <p>The app has the following product categories:</p>
      <TableView thead={table_heading}>
        <tr>
          <th>{props.category.name}</th>
        </tr>
      </TableView>
    </Layout>
  );
}
module.exports = ProductCategoryDetail;
