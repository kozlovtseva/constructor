import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// import Header from './HeaderComponent';
// import Footer from './FooterComponent';
// import HomePage from './HomeComponent';
// import Caluclator from './CaluclatorComponent';
// import About from './AboutComponent';



class Main extends React.Component {

  render() {
    return (
      <div>
        {/* <Header /> */}
        <div>
            <Switch>
                <Route path='/home' component={() => <HomePage/>} />
                <Route path='/caluclator' component={() => <Caluclator/>} />
                <Route path='/aboutus' component={() => <About/>} />
                <Redirect to="/home" />
            </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;