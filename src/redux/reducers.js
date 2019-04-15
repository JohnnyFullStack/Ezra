import { combineReducers } from 'redux'

const initState={
    name:'',
    pwd:'',
    msg:''
}

const userReducer=(state=initState,action)=>{
    switch(action.type){
        case 'LOG_IN':
            return{...state,...action.payload}
        case 'ERROR_MESSAGE':
            return {...state,msg:action.payload}
        default:
            return state
    }
}


export default combineReducers({
    users:userReducer
})