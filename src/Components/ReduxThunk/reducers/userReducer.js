import { GET_USER_SUCCESS,GET_USER_FAIL,GET_USER_REQUEST } from "../constants/userConstant";


export const userReducer = (state={users:[]},action)=>{
    switch (action.type) {
        case GET_USER_REQUEST:
            return {loading:true,users:[]}
        case GET_USER_SUCCESS:
            console.log(action)
            return {loading:false,users:action.payload}
        case GET_USER_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}