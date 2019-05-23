import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Constructor extends React.Component {
    constructor(props) {
        super(props);

        // this.handleSubmit = this.handleSubmit.bind(this);  
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
                    {/* <Dishes/> */}
                    {/* <Meal/> */}
                </div>
            </Container>
        )
    }
}

export default Constructor;  