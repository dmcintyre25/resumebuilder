import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from './components/App';
import 'semantic-ui/dist/semantic.min.css';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#root'));