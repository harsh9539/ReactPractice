import axios from "axios";
import { GET_COMMENT_FAIL, GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS } from "./constant"


export const fetchComment = ()=>{
    return async (dispatch) =>{
        try{
            dispatch({type:GET_COMMENT_REQUEST});
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments");
            dispatch({type:GET_COMMENT_SUCCESS,payload:data});
        }catch(err){
            dispatch({type:GET_COMMENT_FAIL,payload:err.message})
        }
    }
}