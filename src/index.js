import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import reducers from './reducers/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers, 
    /* preloadedState, */
    composeEnhancers ( applyMiddleware(thunk))
    );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

// kreacija redux storea,povezivanje sa redux devtoolsima, wrapanje aplikacije sa provider funkcijom