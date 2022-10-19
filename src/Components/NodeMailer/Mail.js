import axios from 'axios';
import React, { useState } from 'react'
import "./style.css"
const Mail = () => {
    const [name,setFname] = useState("");
    const [email,setLname] = useState("");
    const handleClick = ()=>{
        axios.get("http://localhost:8000").then((res)=>console.log(res.data)).catch((err)=>{console.log(err)});
        axios.post("http://localhost:8000/mail",{
            name:name,
            email:email
        })
        .then((res)=>console.log(res.data)).catch((err)=>{console.log(err)});
        
        // console.log(fname,lname)
    }
    return (
        <div className='contain'>
            <p>Enter Your Name</p>
            <input onChange={(e)=>setFname(e.target.value)} type={"text"}/>
            <p>Enter Your Email</p>
            <input onChange={(e)=>setLname(e.target.value)} type={"email"}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Mail
