import React, { useState } from "react";
var PropTypes = require("prop-types");
import Layout from "./layout";
import Form, { Row } from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row';

function ProductCategoryCreateForm(props) {
  //create_form is using react-bootstrap
  //const [validated, setValidated] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventdefalut();
      event.stopPropagation();
    }
    setValidated(true);
  }
  return (
    <Layout title={props.title}>
      <Container>
      <h1>{props.title}</h1>
      <p>The app has the following products:</p>
    <Form method="POST" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Row}  >
            <Form.Label htmlFor="categoryName" column sm="6" style={{color:'grey'}}>
              Category Name:
            </Form.Label>
            <Row >
              <Form.Control
                required
                type="text"
                name="categoryName"
                placeholder="Spicy or Sweet or Roasted,.."
                value={categoryName}
                onChange={e => setCategoryName(e.target.value)}
              />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a <b>category name</b>.
              </Form.Control.Feedback>
            </Row>
            </Form.Group>
            <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
              <Col sm="6" >
              <Button
                variant="primary"
                type="submit"
              >
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
