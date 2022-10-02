import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./style.css"
import Table from './Table';
// import { Users } from './users'


const MainSearch = () => {
    //######### this is when we fetch data from locally#######
    // const [query, setQuery] = useState("");
    // const keys = ["first_name", "last_name", "email"]
    // const search = (data) => {
    // {" #### this is not the good idea to search for multiple parameters"}
    // return data.filter(
    //     (item) =>
    //         item.first_name.toLowerCase().includes(query)||
    //         item.last_name.toLowerCase().includes(query)||
    //         item.email.toLowerCase().includes(query)
    // );

    // ### Better method for search in more params
    //     return data.filter(
    //         (item) =>
    //             keys.some(key => item[key].toLowerCase().includes(query))
    //     )
    // }
    // ########## search data locally finished ############



    // #### Search from api
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`http://localhost:5000?query=${query}`);
            setData(res.data);
        };
        fetchUsers();
    }, [query])

    return (
        <div className='contain'>
            <input type={"text"} placeholder="Search...." className="search" onChange={e => { setQuery(e.target.value) }} />
            {/* <ul className='list'>
                {
                    Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user)=>(
                        <li key={user.id} className='listItem'>{user.first_name}</li>
                    ))
                }
            </ul> */}
            <Table data={data} />
        </div>
    )
}

export default MainSearch
