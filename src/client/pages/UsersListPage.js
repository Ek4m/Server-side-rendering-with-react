import React from 'react'
import {connect} from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchUsers } from '../actions'
class UsersList extends React.Component {
componentDidMount(){
    this.props.fetchUsers()
}


renderUsers(){
    return this.props.users.map(user => (
    <li key={user.id} >{user.name}</li>
    ))
}


head(){
    return (
        <Helmet>
        <title>{`${this.props.users.length}  Users Loaded`} </title>
        <meta property="og:title" content="Users App" />
    </Helmet>
    )
}

    render(){
        return (
            <div>
           {this.head()}
                <h1>Here is a big list of users</h1>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
return {
    users:state.users
}
}

const mapDispatchToProps = (dispatch) => {
return {
    fetchUsers: () => dispatch(fetchUsers())
}
}

const loadData = (store) => {
   return store.dispatch(fetchUsers())
    
}


export default {
    component:connect(mapStateToProps,mapDispatchToProps)(UsersList),
loadData:loadData
}