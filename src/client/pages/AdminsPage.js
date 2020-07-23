import React from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminsPage extends React.PureComponent {

    componentDidMount(){
        this.props.fetchAdmins()

    }

render(){
    let res = <h1>Loading...</h1>

if(this.props.admins){
    res = this.props.admins.map(admin => (
    <li key={admin.id}>{admin.name}</li>
    ))
}
return (
    <div>
        <h3>Protected list of admins</h3>
<ul>{res}</ul>
    </div>
)
}

}

const mapStateToProps = (state) => {
    return {
admins:state.admins
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdmins:() => dispatch(fetchAdmins())
    }
}

export default {
    component:connect(mapStateToProps,mapDispatchToProps)(requireAuth(AdminsPage)),
loadData:(store) => store.dispatch(fetchAdmins())
}