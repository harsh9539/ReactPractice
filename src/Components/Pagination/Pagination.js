import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Paginations from './Paginations/Paginations';
import Posts from './Posts/Posts';




const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((e) => {
                    console.log(e.data);
                    setPosts(e.data);
                }).catch((err) => {
                    console.log(err.message);
                })
            // setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    return (
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>
                My Blog
            </h1>
            <Posts posts={currentPosts} loading={loading} />
            <Paginations postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}

export default Pagination
