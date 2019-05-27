import React from 'react';
import Dragula from 'react-dragula';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Dishes from './DishesComponent';
import Meal from './MealComponent';

class Constructor extends React.Component {

    state = {
        calories: null,
        constructor: false
    }

    makeContainersArray = () => {
        let containers = [];
        let dishes = this.props.dishes.dishes;
        //dishes
        for (let i = 0; i < dishes.length; i++) {
            let dish = document.getElementById(dishes[i].name);
            containers.push(dish);
        }
        //meals
        let meals = ['breakfast', 'lunch', 'supper'];
        for (let i = 0; i < meals.length; i++) {
            let meal = document.getElementById(meals[i]);
            containers.push(meal);
            for (let k = 2; k < 5; k++) {
                let mealWithNumber = document.getElementById(meals[i] + String(k));
                containers.push(mealWithNumber);
            }
        }
        return containers;
    }
    
    componentDidMount () {
        let containers = this.makeContainersArray();
        let that = this;
        Dragula(
            containers, 
            {
                copy: true,
                accepts: function (el, target) {
                    if (target.hasChildNodes()) {
                        return false;
                    }else if(that.state.calories <= 0){
                        alert("That's too much - you can't eat more calories today.");
                        return false;
                    }else{
                        return true;
                    } 
                }
            }
        ).on('drop', function(el, target) {
            if(target !== null && target.hasChildNodes()){
                let leftCalories = that.state.calories - el.alt;
                that.setState({
                    calories: leftCalories
                });
            } 
        });
    }
    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = () => {
        if(!this.state.constructor){
            this.setState({
                constructor: !this.state.constructor
            }); 
        }               
    }
    reTry = () => {
        let meals = ['breakfast', 'lunch', 'supper'];
        for (let i = 0; i < meals.length; i++) {
            let meal = document.getElementById(meals[i]);
            while (meal.firstChild) {
                meal.removeChild(meal.firstChild);
            }
            for (let k = 2; k < 5; k++) {
                let mealWithNumber = document.getElementById(meals[i] + String(k));
                while (mealWithNumber.firstChild) {
                    mealWithNumber.removeChild(mealWithNumber.firstChild);
                }
            }           
        }
        this.setState({
            constructor: !this.state.constructor
        }); 
    }

    render() {
        return(
            <Container>
                <div className="main">
                    <div className="input">
                        <div className="subtitle">
                            Enter amount of calories per day
                        </div>
                        <input type="number" 
                            placeholder="2500" 
                            onChange={this.handleInputChange}
                            name="calories"
                        />
                        <Button className={!this.state.constructor ? 'Btn' : 'displayNone'}
                                variant="primary" 
                                onClick={this.handleSubmit}
                        >
                            Construct!
                        </Button>
                        <Button className={this.state.constructor ? 'reTryBtn' : 'displayNone'}
                                variant="secondary" 
                                onClick={this.reTry}
                        >
                            Try again
                        </Button>
                    </div>
                    <div className={this.state.constructor ? 'constructor' : 'displayNone'}>
                        <Dishes dishes={this.props.dishes}/>
                        <Meal meals={[{title: "breakfast"},{title: "lunch"},{title: "supper"}]}/>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Constructor;  