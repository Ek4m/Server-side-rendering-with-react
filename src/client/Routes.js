import React from 'react'
import {Route, Link} from 'react-router-dom'
import Home from './components/Home'

export default () => {
    return (
        <div className="Routes">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Route exact   path="/"  component={Home}  />
            <Route exact path="/users" render={() => <h1>Users</h1>} />
        </div>
    )
}