import React, { useState } from "react";
var PropTypes = require("prop-types");
import Layout from "./layout";
import Form, { Row } from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import Row from 'react-bootstrap/Row';

function ProductCategoryCreateForm(props) {
  //create_form is using react-bootstrap
const categoryItems = props.category;
const listItems = categoryItems.map((category)=>
<option key={category.id.toString()} value={category.name} >{category.name}</option>
);

  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState({});
  const [summary, setSummary] = useState("");
  const handleSubmit = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventdefalut();
      e.stopPropagation();
    }
    setValidated(true);
  };
  /**const handleChange = (...args) => {
    let values=new Array;
    values = values.push(event.target.value);
      setCategory(values);
    }**/
  return (
    <Layout title={props.title}>
      <Container>
        <h1>{props.title}</h1>
        <p>The app has the following products:</p>
        <Form method="POST"  onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label
                htmlFor="name"
                column
                sm="6"
              >
                Product Name:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Spicy or Sweet or Roasted,.."
                  onChange={e => setName(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please choose a <b>category name</b>.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} md={{ span: 6, offset: 3 }}>
              <Form.Label column sm="6">
                Select Category
              </Form.Label>
              <Form.Control as="select" multiple="multiple" name="category"  onChange={ value => {
              console.log(value);
              if(value.length > 2){
                let list = Array.isArray(value);

              }
            }} >
{listItems}
          </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
              <Form.Label column sm="6">
                Summary
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="6"
                name="summary"
                value={summary}
                onChange={e => setSummary(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
              <Col sm="6">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </Layout>
  );
}
module.exports = ProductCategoryCreateForm;
