import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dishes = (props) => {
    const dishes = props.dishes.dishes.map((dish) => {
        return (
            <Col xs={12} key={dish.id}>
                <RenderDish dish={dish} />
            </Col>
        );
    });
    return(
        <Container>
            {/* <Row>
                <Col xs={12}>
                    <h4>Fish&Meat</h4>
                </Col>                
                <Col xs={12}>
                    <h4>Garnish</h4>
                </Col>
                <Col xs={12}>
                    <h4>Salads</h4>
                </Col>
                <Col xs={12}>
                    <h4>Snacks</h4>
                </Col>
                <Col xs={12}>
                    <h4>Desserts</h4>
                </Col>
            </Row>               */}
            {dishes}
        </Container>
    )
}

export default Dishes;  