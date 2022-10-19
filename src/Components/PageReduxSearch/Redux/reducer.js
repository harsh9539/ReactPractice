import { GET_COMMENT_FAIL, GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS } from "./constant";



export const commentReducer = (state={comment:[]},action)=>{
    switch(action.type){
        case GET_COMMENT_REQUEST:
            return {loading:true,comment:[]};
        case GET_COMMENT_SUCCESS:
            return {loading:false,comment:action.payload};
        case GET_COMMENT_FAIL:
            return {loading:false,error:action.payload};
        default:
            return state;
    }
}