import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return(
        <div className="footer">
        <Container>
            <Row className="justify-content-around">
                <Col xs={12} sm={6} md={4} className="row">
                    <Col xs={4}>
                        Contact us:
                    </Col>
                    <Col xs={8}>
                        Email: ration@mail.ru
                        <br/>
                        Tel.: +7(999)777-77-77
                    </Col>
                </Col>
                <Col xs={12} sm={6} md={4} className="row">
                    <Col xs={5}>
                        Follow us:
                    </Col>
                    <Col xs={7}>
                        <a className="icon" href="http://www.facebook.com/profile.php?id=">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </a>
                        <a className="icon" href="http://twitter.com/">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                        <a className="icon" href="http://instagram.com/">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                        <a className="icon" href="http://google.com/+">
                            <FontAwesomeIcon icon={['fab', 'google']} />
                        </a>
                    </Col>
                </Col>
            </Row>                   
            <Row className="justify-content-around">            
                <div className="col-auto mt-3">
                    <p>© Copyright 2019</p>
                </div>
            </Row>
        </Container>
        </div>
    )
}

export default Footer;