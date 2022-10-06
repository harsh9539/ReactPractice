import React, { useContext } from 'react'
import { LoginContext } from './LoginContext';

const Home = () => {
    const {login,setLogin} = useContext(LoginContext);
    function handleClick(){
        setLogin('');
    }
    return (
        <div>
            <h1>This is Home Page of our website. Welcome {login}</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Home
