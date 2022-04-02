import { LOGIN_USER } from "./auth.action";

const initState = {
    user:null
}

export const authReducer = (store = initState,{type,payload})=>{
    switch(type){
        case LOGIN_USER:
            return {...store, user:payload}
        default:
            return store;
    }

}