import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider}  from 'react-redux'
import reducers from './reducers/index'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"/api"
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,window.INITIAL_STATE,composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance))))

ReactDOM.hydrate(
<Provider store={store}>
<BrowserRouter>
<div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
</Provider> ,
    document.querySelector('#root')
    )