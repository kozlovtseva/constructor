import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Main from './components/MainComponent';
import './App.scss';


const store = ConfigureStore();
library.add(fab);

class App extends React.Component {
    render() {
        return (     
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
