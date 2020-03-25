var React = require("react");
var PropTypes = require("prop-types");
import Layout from "./layout";
import TableView from "./table_view";

function DetailList(props) {
console.log(props);
  let countNum = 0;
    const prod_list = props.product;
    const productUrl = "/catalog/product/";
    const productcategoryUrl = "/catalog/productcategory/";
    const prod_list_items = prod_list.map(prod => (
    <tr>
      <td>{++countNum}</td>
      <td>
        <strong>  <a href={productUrl.concat(prod.productname).concat("/").concat(prod.productcategory)}>{prod.productcategory}</a></strong>{" "}
        {prod.totalStock > 0 ? (
          <p>
            ({prod.totalStock})
            <a href={productUrl.concat(prod.productname).concat("/").concat(prod.productcategory)}>{prod.productcategory}>check stock</a>
          </p>
        ) : null}
      </td>
        <td>{prod.totalStock}</td>
      <td>
        <p
          className={
            prod.status == "Stock"
              ? "text-success"
              : prod.status == "Out of Stock (Sold)"
              ? "text-danger"
              : prod.status == "In Production"
              ? "text-primary"
              : "text-secondary"
          }
        >
          <strong>{prod.status}</strong>
        </p>
      </td>
    </tr>
  ));
  const table_heading = (
    <tr>
      <th>#</th>
      <th>product category name</th>
        <th>stock</th>
      <th>status</th>
    </tr>
  );
  return (
    <Layout>
      <h1>
        Product: <b>{props.product.productname}</b>
      </h1>
      <p>
        <b>Summary:</b>
        <br />
        {props.product.summary}
      </p>
      <br />
      <h4>product category list</h4>
      <TableView thead={table_heading}>{prod_list_items}</TableView>
    </Layout>
  );
}
module.exports = DetailList;
