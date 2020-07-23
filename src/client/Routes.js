import React from 'react'
import Home from './pages/HomePage'
import UsersList from './pages/UsersListPage'
import App from './App'
import NotFound from './pages/NotFoundPage'
import AdminsPage from './pages/AdminsPage'
const Routes = [
{
    ...App,
    routes:[
        {
            path:'/',
        ...Home,
            exact:true
        },
        {
            path:'/users',
            ...UsersList
        },
        {
            path:'/admins',
            ...AdminsPage
        },
        {
            ...NotFound
        }
    ]
}
]




export default Routes