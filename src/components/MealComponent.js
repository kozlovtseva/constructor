import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Meal = (props) => {
    const meals = props.meals.map((meal) => {
        return (
            <Col xs={4} key={meal.title}>
                <h3>{meal.title}</h3>
                <div className="blocks">
                    <Row>
                        <Col xs={6} className="block" id={meal.title}/>
                        <Col xs={6} className="block" id={meal.title + '2'}/>
                    </Row>
                    <Row>
                        <Col xs={6} className="block" id={meal.title + '3'}/>
                        <Col xs={6} className="block" id={meal.title + '4'}/>
                    </Row>
                </div>
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