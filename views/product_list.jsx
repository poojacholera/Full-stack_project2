import React from 'react';
import  PropTypes from 'prop-types';
import Layout from './layout';
import TableView from './table_view';


function ProductList(props) {
    const productUrl = "/catalog/product/";
    const products = props.product_list;
    let countNum = 0;
    const listItems = products[0].name.map((name) =>
        <tr>
            <td>{++countNum}</td>
            <td key={name}><a href={productUrl.concat(name)}>{name}</a>
            </td>
        </tr>
    );
    const table_heading = (
        <tr>
            <th>#</th>
            <th>name</th>
        </tr>
    );
    return (
        <Layout title={props.title}>
            <h1>{props.title}</h1>
            <p>The app has the following products:</p>
            <TableView thead={table_heading}>
                {listItems}
            </TableView>
            <p>{console.log(props)}</p>
        </Layout>
    );
}
module.exports = ProductList;
