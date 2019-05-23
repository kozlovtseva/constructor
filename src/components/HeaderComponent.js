import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div className="header">
                <Container >
                    <Row>
                        <Col xs={12} sm={5} md={4} lg={2}>
                            <Link to="/constructor">
                                <img src='images/logo.png' alt="Ration Constructor" height="150" width="150"/>
                            </Link>
                        </Col>
                        <Col xs={12} sm={7} md={8} lg={10}>
                            <Row>
                                <Col xs={12}>
                                    <h1 className="title">
                                        Ration Constructor               
                                    </h1>
                                </Col>
                                <Col className="mainSubtitle" xs={12}>
                                    For Your Healthy Life
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href='/constructor'>
                                    Constructor
                                </Nav.Link>
                                <Nav.Link href='/calculator'>
                                    Calculator
                                </Nav.Link>
                                <Nav.Link href='/aboutus'>
                                    About Us
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;