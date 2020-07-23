import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'


export default (ChildComponent) => {
    class RequireAuth extends Component {
        render(){
            switch(this.props.auth){
                case false:
                    return <h1>You need to signup</h1>
                case null:
                        return <div>Loading...</div>
                        default:
                            return <ChildComponent {...this.props} />
            }
        }
    }

const mapStateToProps = (state) => {
    return{ 
        auth:state.auth
    }
}

   return  connect(mapStateToProps)(RequireAuth)
}