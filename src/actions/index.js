import axios from "axios";

export const logIn = ({name,pwd}) =>{
    return dispatch=>{
        axios.post('/login',{name,pwd})
            .then(res=>{
                if(res.status===200 && res.data.code===0){
                    return {
                        type:'LOG_IN',
                        payload:{name,pwd}
                    }
                }else{
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}

const errMsg=(msg)=>{
    return {
            type:'ERROR_MESSAGE',
            payload:msg
    }
}