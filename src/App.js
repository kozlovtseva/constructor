import React from 'react';
import './App.css';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

const store = ConfigureStore();
library.add(faStroopwafel)

class App extends Component {
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
