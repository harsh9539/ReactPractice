import React,{memo} from 'react'

const Todos = ({todos,addTodo}) => {
    console.log("ye bete")
    return (
        <div>
            <h1 className='max-h-13'>MY todo</h1>
            {
                todos.map((item,index)=>{
                    return(
                        <p key={index}>{item}</p>
                    )
                })
            }
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default memo(Todos)
