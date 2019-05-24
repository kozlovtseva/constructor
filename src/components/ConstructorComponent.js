import React from 'react';
import Dragula from 'react-dragula';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Dishes from './DishesComponent';

class Constructor extends React.Component {

    componentDidMount () {
        let salmon = document.getElementById('salmon');
        let sandwich = document.getElementById('sandwich');
        let salad = document.getElementById('salad');
        let greek_salad = document.getElementById('greek_salad');
        let pasta = document.getElementById('pasta');
        let herb = document.getElementById('herb');
        let sushi = document.getElementById('sushi');
        let egg = document.getElementById('egg');
        let cake = document.getElementById('cake');
        let berries = document.getElementById('berries');

        let breakfast = document.getElementById('breakfast');
        let lunch = document.getElementById('lunch');
        let supper = document.getElementById('supper');

        Dragula(
            [salmon, sandwich, salad, greek_salad, pasta, herb, sushi, egg, cake, berries,
            breakfast,lunch,supper], 
            {
                copy: true,
                accepts: function (el, target, source, sibling) {
                    if (target.hasChildNodes()) {
                        return false;
                    }else{
                        return true;
                    } 
                }
            }
        )
    }
    render() {
        return(
            <Container>
                <div className="main">
                    <div className="input">
                        <Form>
                            <Form.Group controlId="formCalories">
                                <Form.Label>
                                    <div className="subtitle">
                                        Enter amount of calories per day
                                    </div>
                                </Form.Label>
                                <Form.Control type="number" placeholder="2500" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Construct!
                            </Button>
                        </Form>
                    </div> 
                    <Dishes dishes={this.props.dishes}/>
                    {/* <Meal/> */}
                    <div className="block" id="breakfast"></div>
                    <div className="block" id="lunch"></div>
                    <div className="block" id="supper"></div>
                </div>
            </Container>
        )
    }
}

export default Constructor;  