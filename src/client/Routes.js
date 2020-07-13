import React from 'react'
import {Route, Link} from 'react-router-dom'
import Home from './components/Home'
import UsersList from './components/UsersList'

export default () => {
    return (
        <div className="Routes">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Route exact   path="/"  component={Home}  />
            <Route    path="/users"  component={UsersList}  />
        </div>
    )
}