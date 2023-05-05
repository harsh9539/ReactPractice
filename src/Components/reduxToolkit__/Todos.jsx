import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodos, fetchTodos } from './Slices/todoSlice';

const Todos = () => {
  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodos(id));
  }
  useEffect(() => {
    // dispatch(fetchTodos());
  }, [])
  return (
    <div>
      {/* <button onClick={()=>dispatch(fetchTodos())} >fetch Todos</button> */}
      {
        todos.length > 0 &&
        todos.map((item, key) => (
          <div key={key} style={{ marginLeft: 10 }}>
            <p>title:{item.title}</p>
            <p>id:{item.id}</p>
            <button onClick={() => handleDelete(item.id)} className='bg-red-200' style={{ background: 'red', color: 'white' }}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default Todos
