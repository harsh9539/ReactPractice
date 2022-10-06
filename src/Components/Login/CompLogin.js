import React, { useContext, useState } from 'react'
import Home from './Home';
import { LoginContext} from './LoginContext';



const CompLogin = () => {
    const {login,setLogin} = useContext(LoginContext);
    const [username,setUsername] = useState('');
    function handleClick (){
        setLogin(username);
    }
    return (
        <div style={{padding:100}}>
            {
                login
                    ?
                    <Home />
                    :
                    <div>
                        <h2>You are not logged in Click on the button to logIn</h2>
                        <input name="username" onChange={(e)=>setUsername(e.target.value)}></input>
                        <button onClick={handleClick}>Log In</button>
                    </div>
            }
        </div>
    )
}

export default CompLogin
