import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incByAm, increment } from './Slices/accountSlice';

const Account = () => {
  const { amount } = useSelector(state => state.account);
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: 'gray', minHeight: '20vh' }}>
      <p>
        Account Value : {amount}
      </p>
      <div style={{display:'flex',flexDirection:'column',alignItems:'start'}}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incByAm(10))}>Inc by 100</button>
      </div>
    </div>
  )
}

export default Account
