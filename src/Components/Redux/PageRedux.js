import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from './actions/Action';

const PageRedux = () => {
    const myState = useSelector((state)=>state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <div style={{margin:100}}>
            <h1>Increment Decrement Counter</h1>
            <div style={{cursor:'pointer'}} onClick={()=>dispatch(decNumber())}> - </div>
            <input value={myState} type={"text"}/>
            <div style={{cursor:'pointer'}} onClick={()=>dispatch(incNumber())}> + </div>
        </div>
    )
}

export default PageRedux
