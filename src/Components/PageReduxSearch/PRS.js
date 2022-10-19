// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Comments from './Comments'
import Pagination from './Pagination/Pagination'
import { fetchComment } from './Redux/action'
import "./style.css"
const PRS = () => {
    const [query,setQuery] = useState("");
    const [postsPerPage,setPostsPerPage] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);

    // for fetching the api
    const dispatch = useDispatch();
    const commentList = useSelector(state=>state.commentReducer);
    const {loading,comment,error} = commentList;
    useEffect(()=>{
        dispatch(fetchComment())
    },[dispatch])

    // for slicing the result
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = comment.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    // for searching the items or filter
    const filteredItems = currentPosts.filter(item=>{
        // console.log(item.email);
        return item.email.toLowerCase().includes(query.toLowerCase());
        
    })
    return (
        <div>
            <div className='div'>
                Search: <input onChange={(e)=>setQuery(e.target.value)} placeholder='Search....'/>
            </div>
            <div>
                {
                    loading ?
                    <h1>Loading....</h1>
                    :
                    error ? <h2>{error}</h2>
                    :
                    <div>
                    <Pagination
                    postsPerPage={postsPerPage}
                    totalComments={comment.length}
                    paginate={paginate}
                    />
                    {/* <Comments comment={currentPosts}/> */}
                    <Comments comment={filteredItems}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default PRS
