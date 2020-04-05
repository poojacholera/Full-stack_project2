import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
/*import "../../public/css/Navmenu.css";*/

const Navmenu =() => {
        return (
            <React.Fragment>
                <Navbar className="navMenu">
                    <Navbar.Brand href="/">
                        <img
                            src="./img/welbaked_logo.png"
                            width="auto"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Welbaked logo"
                        />
                   </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  className="mr-auto">
                            <Nav.Link href="/">Home{/*<Link className="text-white" exact to='/'>Home</Link>*/}</Nav.Link>
                            <Nav.Link href="/dashboard" >Dashboard{/*<Link className="text-white" to='/Recipes'>Recipes</Link>*/}</Nav.Link>
                          {/* <NavDropdown className="text-white"  className={styles.whiteText}title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item className="text-white" href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item className="text-white" href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item className="text-white" href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="text-white" href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
};
export default Navmenu;
