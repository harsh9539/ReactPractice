import React from 'react'

const Comments = ({comment}) => {
    // console.log(comment);
    return (
        <div className='items'>
            {
                comment.map((item,key)=>
                <div key={key}>
                    <h1>{item.email}</h1>
                </div>
                )
            }
        </div>
    )
}

export default Comments
