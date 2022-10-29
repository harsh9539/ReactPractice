// It is similar to useMemo 
// Difference is useMemo hook return the memorized value and useCallback hook return memorized fuction
// They both are used to increase the performance of app

import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const Callback = () => {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState(["Yoo Todo"]);

    const handleClick = ()=>{
        setCount((c)=>c+1);
    }

    const AddTodo = useCallback(()=>{
        return setTodos((prev)=>[...prev,"New Todo "]);
    },[todos])
    // const AddTodo = ()=>{
    //     setTodos((prev)=>[...prev,"New Todo"]);
    // }
    return (
        <>
            <Todos todos={todos} addTodo={AddTodo}/>
            <hr/>
            <div>HR</div>
            <hr/>
            <div>
                Count:{count}
                <button onClick={handleClick}>ADD</button>
            </div>
        </>
    )
}

export default Callback
