import React from 'react'
import Account from './Account'
import { useSelector } from 'react-redux';
import Todos from './Todos';
import Bonus from './Bonus';

const Main = () => {
  const { amount } = useSelector(state => state.account);
  return (
    <div style={{ backgroundColor: 'whitesmoke', minHeight: '50vh' }}>
      <p>
        Main Account value: {amount}
      </p>
      <Account />
      <Todos/>
      <Bonus/>
    </div>
  )
}

export default Main
