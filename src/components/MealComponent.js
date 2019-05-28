import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Meal = (props) => {
    const meals = props.meals.map((meal) => {
        return (
            <Col xs={12} md={6} lg={4} key={meal.title} className="blocks">
                <Row><h3 className="mealsTitle">{meal.title}</h3></Row>
                <Row>
                    <Col xs={5} className="block" id={meal.title}/>
                    <Col xs={5} className="block" id={meal.title + '2'}/>
                </Row>
                <Row>
                    <Col xs={5} className="block" id={meal.title + '3'}/>
                    <Col xs={5} className="block" id={meal.title + '4'}/>
                </Row>
            </Col>
        );
    });
    return(
        <Container>
            <Row>
                {meals}
            </Row>            
        </Container>
    )
}

export default Meal;  