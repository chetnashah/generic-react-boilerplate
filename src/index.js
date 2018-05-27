import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import rootReducer from './reducers';
const store = createStore(rootReducer, applyMiddleware());

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Route exact path="/" component={App} />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
