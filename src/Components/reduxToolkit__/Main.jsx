import React from 'react'
import Account from './Account'
import { useSelector } from 'react-redux';
import Todos from './Todos';
import Bonus from './Bonus';
import Admin from './Admin';

const Main = () => {
  const { amount } = useSelector(state => state.account);
  return (
    <div style={{ backgroundColor: 'whitesmoke', minHeight: '50vh' }}>
      <p style={{ backgroundColor: 'whitesmoke', minHeight: '10vh' }}>
        Main Account value: {amount}
      </p>
      <Account />
      <Todos/>
      <Bonus/>
      <Admin/>
    </div>
  )
}

export default Main
