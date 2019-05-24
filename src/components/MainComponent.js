import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { fetchDishes } from '../redux/ActionCreators';
import { connect } from 'react-redux';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Constructor from './ConstructorComponent';
import Calculator from './CalculatorComponent';
import About from './AboutComponent';


const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
}
  
const mapDispatchToProps = dispatch => ({
    fetchDishes: () => {dispatch(fetchDishes())}
});

class Main extends React.Component {
    componentDidMount() {
        this.props.fetchDishes();
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path='/constructor' component={() => <Constructor dishes={this.props.dishes}/>} />
                        <Route path='/calculator' component={() => <Calculator/>} />
                        <Route path='/aboutus' component={() => <About/>} />
                        <Redirect to="/constructor" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));