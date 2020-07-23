import {FETCH_ADMINS} from '../actions/index'

export default function(state = [], action){
    switch(action.type){
        case FETCH_ADMINS:
            return action.payload.data
            default:
                return state
    }
    }