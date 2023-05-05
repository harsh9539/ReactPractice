// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: () => `/todos`,
      // query:(id)=>`/todos/${id}`,
      providesTags:["todos"]
    }),
    deleteTodos:builder.mutation({
      query:(id)=>({
        url:`/todos/${id}`,
        method:'DELETE',
      }),
      invalidatesTags:["todos"]
    })
    // Similarly we can perform update and add actions in Redux toolkit query (RTK)
    // we have to remember we also use mutation when we have to make post , update and delete request
  }), 
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchTodosQuery,useDeleteTodosMutation } = todoApi