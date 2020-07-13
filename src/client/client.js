import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider}  from 'react-redux'
import reducers from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,{},composeEnhancers(applyMiddleware(thunk)))

ReactDOM.hydrate(
<Provider store={store}>
<BrowserRouter>
<React.StrictMode>
<Routes />  
</React.StrictMode>
    </BrowserRouter>
</Provider> ,
    document.querySelector('#root')
    )