import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from './actions/Action';

const PageRedux = () => {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <div style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
            <h1>Increment Decrement Counter</h1>
            <div style={{ margin: 100, display: 'flex' }}>
                <div style={{ cursor: 'pointer',height:100,width:100,textAlign:'center',border:'1px solid blue',paddingTop:20 }} onClick={() => dispatch(decNumber())}> <p style={{fontSize:'2rem',fontWeight:600}}> - </p> </div>
                <input style={{textAlign:'center'}} value={myState} type={"text"} />
                <div style={{ cursor: 'pointer',height:100,width:100,textAlign:'center',border:'1px solid blue',paddingTop:20 }} onClick={() => dispatch(incNumber())}> <p style={{fontSize:'2rem',fontWeight:600}}> + </p> </div>
            </div>
        </div>
    )
}

export default PageRedux
