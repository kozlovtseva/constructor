import React, { Component } from 'react';
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
            <div>
                <div className="jumbotron row-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-5 col-md-4 col-lg-2">
                                <Link to="/constructor">
                                    {/* <img src='assets/images/logo.png' height="150" width="150"/> */}
                                    <img src='https://fruitnews.ru/images/AvacadoChrisStock.jpg' height="150" width="150" alt="Ration Constructor"/>
                                </Link>
                            </div>
                            <h1 className="col-12 col-sm-7 col-md-8 col-lg-10 title">
                                Ration Constructor For Your Healthy Life              
                            </h1>
                        </div>
                    </div>
                </div>
                <Navbar collapseOnSelect expand="lg">
                    <div className="container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
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
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;