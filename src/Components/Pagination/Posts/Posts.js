import React from 'react'

const Posts = ({posts,loading}) => {
    if(loading){
        return <p>Loading...</p>
    }
    return (
        <ul className='list-group mb-4'>
            {posts.map(post=>{
                return(
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            )})}
        </ul>
    )
}

export default Posts
