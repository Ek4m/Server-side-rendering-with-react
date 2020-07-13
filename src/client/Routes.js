import React from 'react'
import Home from './components/Home'
import UsersList, {loadData} from './components/UsersList'
const Routes = [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/users',
        component:UsersList,
        loadData
    }
]

export default Routes