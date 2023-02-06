import React from 'react'


const data = [
    {
        id:1,
        category:'Food'
    },
    {
        id:2,
        category:'Cat'
    },
    {
        id:3,
        category:'Food'
    },
    {
        id:4,
        category:'Cat'
    }
]


const Test = () => {
    console.log(data);
    const filteredItems = data.filter(item=>{
        console.log(item.category);
        if(item.category == 'Food') return item;
    })
    console.log(filteredItems);
    return (
        <div>
            Hello from test wali file
            {
                filteredItems.map((item,key)=>(
                    <div key={key}>
                        <p>{item.id}</p>
                        <p>{item.category}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Test
