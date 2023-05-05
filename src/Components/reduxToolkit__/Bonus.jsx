import React from 'react'
import { useSelector } from 'react-redux'

const Bonus = () => {
  const {bonus} = useSelector(state=>state.bonus);
  return (
    <div>
        Value of bonus is : {bonus}
    </div> 
  )
}

export default Bonus
