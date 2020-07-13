import React from 'react'
import {connect} from 'react-redux'
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

    render(){
        return (
            <div>
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


export default connect(mapStateToProps,mapDispatchToProps)(UsersList)
export {loadData}