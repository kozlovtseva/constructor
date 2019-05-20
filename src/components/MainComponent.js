import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import Constructor from './ConstructorComponent';
import Calculator from './CalculatorComponent';
import About from './AboutComponent';



class Main extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div>
            <Switch>
                <Route path='/constructor' component={() => <Constructor/>} />
                <Route path='/calculator' component={() => <Calculator/>} />
                <Route path='/aboutus' component={() => <About/>} />
                <Redirect to="/constructor" />
            </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;