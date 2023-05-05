import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodos, fetchTodos } from './Slices/todoSlice';
import { useDeleteTodosMutation, useFetchTodosQuery } from './RTK';

const Admin = () => {
  const {data,error,isLoading,isSuccess} = useFetchTodosQuery();
  const [deleteTodo,response] = useDeleteTodosMutation();
  
  if(isLoading) return <p>Loading.....</p>
  if(error) return <p>Some error occured while loading data.</p>
  return (
    <div>
      <h1>Admin todos</h1>
      {
        data.length > 0 &&
        data.map((item, key) => (
          <div key={key} style={{ marginLeft: 10 }}>
            <p>title:{item.title}</p>
            <p>id:{item.id}</p>
            <button onClick={() => deleteTodo(item.id)} className='bg-red-200' style={{ background: 'red', color: 'white' }}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default Admin
