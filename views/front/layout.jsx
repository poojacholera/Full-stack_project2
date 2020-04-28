import Navmenu from "./navmenu";

var React = require("react");
var PropTypes = require("prop-types");
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const bodyStyle = {
    padding: "0",
    margin: "0"
};
const backdropStyle = {
    padding: "0",
    margin: "0",
    backgroundSize: "cover",
    minHeight: "720px",
    width: "100%",
    height: "100%"
};

function Layout(props) {
    return (
        <html lang="en">
        <head>
            <title>{props.title}</title>
            <meta charSet="UTF-8" />
            <meta
                httpEquiv="Content-Security-Policy"
                content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta
                name="description"
                content="15 mouth watering flavours. Vaccum Packed. No Artificial flavor, Color or Preservatives. Fresh green ingredients of best quality are hand-picked. Everyday! Order-based production. Learn more. Get it now!"
            />
            <meta
                name="Bipin Cholera, Divyesh Cholera"
                content="Shree Wel Baked Khakhra"
            />
            <meta
                name="keywords"
                content="HTML5,CSS, React, Express, mongoose, MongoDB"
            />
            <meta name="author" content="Pooja Cholera"/>
            <link rel="icon" type="image/x-icon" href="shree.ico"/>
            <link rel="stylesheet" href="../../stylesheets/style.css"/>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <link
                href="https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.css"
                rel="stylesheet"
            />
            <script src="https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.js"/>
            <script
                src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                crossOrigin="anonymous"
            />
            <script
                src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                crossOrigin="anonymous"
            />
            <script
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                crossOrigin="anonymous"
            />
        </head>
        <body style={bodyStyle}>


        <Container fluid="md">
           <Navmenu/>
        </Container>
        <Row>
            <Col style={{backgroundColor: "red"}}></Col>
            <Col xs={5}>
                <p style={{color: "red"}}>{props.title}</p>
            </Col>
            <Col xs lg="2" style={{backgroundColor: "red"}}></Col>
        </Row>
        <Container fluid style={bodyStyle}>
            <Image style={backdropStyle} src="../images/wheatkhakhra.jpg" fluid/>
        </Container>
        <Container>
            <Row>
                <Col>{props.children}</Col>
            </Row>
        </Container>
        </body>
        </html>
    );
}

Layout.propTypes = {
    title: PropTypes.string
};
module.exports = Layout;
