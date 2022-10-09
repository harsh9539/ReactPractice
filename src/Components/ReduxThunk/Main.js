import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './action/userAction';
import User from './User';

const Main = () => {
    const dispatch = useDispatch();
    const userList = useSelector(state=>state.userList)
    const {loading,users,error} =  userList;
    useEffect(()=>{
        dispatch(userAction());
    },[dispatch])
    return (
        <div className='flex justify-center align-center'>
            <h1 className='text-center'>Redux Thunk</h1>
            {
                loading ? <h2>Loading ....</h2> : error ? <h2>{error}</h2>:
                <User users={users} />
            }
        </div>
    )
}

export default Main
