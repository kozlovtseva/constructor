import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'


function RenderDish ({dish}) {
    return (
<>
            <img
            className="d-block w-100"
            src={"http://localhost:3001/" + dish.image}
            alt={dish.name}
            width="155"
            height="103"
            />
            <Carousel.Caption>
                <h5>{dish.name}</h5>
                <p>{dish.description}</p>
            </Carousel.Caption>
        </>
    );
}

const Dishes = (props) => {
    const FishMeat = props.dishes.dishes.filter(e => e.type === "Fish&Meat").map((dish) => {
        return (
            <Carousel.Item key={dish.id}>
                <RenderDish dish={dish} />
            </Carousel.Item>
        );
    });
    const Garnish = props.dishes.dishes.filter(e => e.type === "Garnish").map((dish) => {
        return (
            <Carousel.Item key={dish.id}>
                <RenderDish dish={dish} />
            </Carousel.Item>
        );
    });
    const Salads = props.dishes.dishes.filter(e => e.type === "Salad").map((dish) => {
        return (
            <Carousel.Item key={dish.id}>
                <RenderDish dish={dish} />
            </Carousel.Item>
        );
    });
    const Snacks = props.dishes.dishes.filter(e => e.type === "Snack").map((dish) => {
        return (
            <Carousel.Item key={dish.id}>
                <RenderDish dish={dish} />
            </Carousel.Item>
        );
    });
    const Desserts = props.dishes.dishes.filter(e => e.type === "Dessert").map((dish) => {
        return (
            <Carousel.Item key={dish.id}>
                <RenderDish dish={dish} />
            </Carousel.Item>
        );
    });

    return(
        <Container>
            <Row>
                <Col xs={2}>
                    <h2>Fish&Meat</h2>
                    <Carousel interval="false">
                        {FishMeat}
                    </Carousel>
                </Col>
                <Col xs={2}>
                    <h2>Garnish</h2>
                    <Carousel interval="false">
                        {Garnish}
                    </Carousel>
                </Col>
                <Col xs={2}>
                    <h2>Salads</h2>
                    <Carousel interval="false">
                        {Salads}
                    </Carousel>
                </Col>
                <Col xs={2}>
                    <h2>Snacks</h2>
                    <Carousel interval="false">
                        {Snacks}
                    </Carousel>
                </Col>
                <Col xs={2}>
                    <h2>Desserts</h2>
                    <Carousel interval="false">
                        {Desserts}
                    </Carousel>
                </Col>
            </Row>              
        </Container>
    )
}

export default Dishes;  