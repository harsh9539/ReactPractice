import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from './todo';

// const Main = () => {
//     const dispatch = useDispatch();
//     const {c:value} = useSelector(state=>state.custom)

//     const addBtn = () => {
//         dispatch({
//             type: 'increment'
//         })
//     }
//     const add25 = ()=>{
//         dispatch({
//             type:'incrementByValue',
//             payload:25
//         })
//     }
//     const subBtn = () => {
//         dispatch({
//             type: 'decrement'
//         })
//     }
//     return (
//         <div>
//             <h1>{value}</h1>
//             <button onClick={addBtn} className='p-2 bg-red-500'>Increment</button>
//             <button onClick={add25} className='p-2 bg-red-500'>Increment by 25</button>
//             <button onClick={subBtn}>Decrement</button>
//             <br />
//         </div>
//     )
// }
const Main = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { data: todos } = useSelector(state => state.todo);
    const kuch = todos.slice(0, 20);
    const addTodo = (item) => {
        let getResult = JSON.parse(localStorage.getItem("todos"));
        console.log(getResult);
        if (getResult === null) localStorage.setItem("todos", JSON.stringify([{ item, quantity: 0 }]))
        else {
            getResult.push({ item, quantity: 0 });
            localStorage.setItem("todos", JSON.stringify(getResult));
        }
    }

    const getItem = () => {
        const localItems = JSON.parse(localStorage.getItem('todos'));
        console.log(localItems);
        setData(localItems);
    }

    const changeData = (data) => {
        const localItems = JSON.parse(localStorage.getItem('todos'));
        // console.log(data);
        localItems.map(({ item }) => {
            if (item.id === data.item.id) {
                const localData = JSON.parse(localStorage.getItem("todos"));
                // let unfilterData = localData.filter(({item})=>)
                let filterData = localData.filter(({item})=> item.id !== data.item.id);
                data.quantity++;
                filterData.push(data);
                localStorage.setItem('todos',JSON.stringify(filterData));
                console.log(filterData);
                getItem();
                // data.quantity++;
                return true;
            }
            return false;
        }
        )
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={(e) => { dispatch(fetchTodo()) }}>Todos</button>
            <br />
            <ol style={{ textAlign: 'center' }}>
                {
                    kuch.map((item) => {
                        return <li style={{ cursor: 'pointer' }} onClick={() => addTodo(item)} key={item.id}>{item.title}</li>
                    })
                }
            </ol>
            <button onClick={(e) => { (getItem()) }}>Local Storage</button>
            <br />
            <ol style={{ textAlign: 'center' }}>
                {
                    data.map(({ item, quantity }) => {
                        return <li style={{ cursor: 'pointer' }} onClick={() => changeData({ item, quantity })} key={item.id}>{`${item.title} ${quantity}`}</li>
                    })
                }
            </ol>
        </div>
    )
}


export default Main
