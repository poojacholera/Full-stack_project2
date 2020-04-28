import React, {useState} from 'react';
import  PropTypes from 'prop-types';
import Layout from './layout';
import Product_r from './product_r'

function ProductList(props) {
    const [key, setKey] = useState('biscuit');

    const productUrl = "/catalog/product/";
    const products = props.product_list;
    let countNum = 0;
    const getSearch = (e) => {
        e.preventDefault();
        setKey(e);
        console.log("Key is :"+ e);
    };
    const commons='#';

    return (
        <Layout>
<Product_r/>
        </Layout>

    /* <Layout title={props.title}>
         <h1>{props.title}</h1>
         <p>The app has the following products:</p>
         <TableView thead={table_heading}>
             {listItems}
         </TableView>
         <p>{console.log(props)}</p>
     </Layout>*/
);
}
module.exports = ProductList;
/*

<Tab.Container id="tabs-example" defaultActiveKey={key} activeKey={key}
               onSelect={key => setKey(key)} >
    <Row>
        <Col sm={3}>
            <Nav   activeKey={key}  onSelect={getSearch}  >
                <Nav.Item >
                    <Nav.Link eventKey="1" href={commons.concat("1")} >home</Nav.Link>
                </Nav.Item>
                { products[0].name.map((name) =>
                    <Nav.Item >
                        <Nav.Link eventKey={name} href={commons.concat(name)} >{name}</Nav.Link>
                    </Nav.Item>
                )
                }
            </Nav>
        </Col>
        <Col sm={9}>
            <Tab.Content >
                <Tab.Content eventKey="1" title="1">Hello</Tab.Content>
                {products[0].name.map((name) =>
                    <Tab.Pane eventKey={name} title={name} >
                        <p>{++countNum} content:</p> {name}
                    </Tab.Pane>
                )
                }
            </Tab.Content>
        </Col>
    </Row>
</Tab.Container>*/
