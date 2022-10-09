import axios from "axios";
import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from "../constants/userConstant";


export const userAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_USER_REQUEST });
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            // direct destructure of data from api
            // const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
            dispatch({ type: GET_USER_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({
                type: GET_USER_FAIL,
                payload: error.data && error.response.data.message ? error.response.data.message : error.message
            })
        }
    }
}