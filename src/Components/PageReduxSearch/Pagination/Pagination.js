import React from 'react'

const Pagination = ({postsPerPage,totalComments,paginate}) => {
    const pageNumbers = [];
    for(var i = 1; i <= Math.ceil(totalComments/postsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul>
                {
                    pageNumbers.map(number=>(
                        <li>
                            <a
                            href='!#'
                            onClick={(e)=>paginate(number)}
                            >{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination
