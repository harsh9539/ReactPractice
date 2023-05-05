import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from './todo';
import { addItemsToCart } from './cart';
import { addToCart, selectCartItems, updateCartItem } from './responseFromchat';
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
// const Main = () => {
//     const [data, setData] = useState([]);
//     const dispatch = useDispatch();
//     const { data: todos } = useSelector(state => state.todo);
//     // const items = useSelector(state=>state.cartReducer);
//     // console.log(items);
//     const kuch = todos.slice(0, 20);
//     // const addTodo = (item) => {
//     //     let getResult = JSON.parse(localStorage.getItem("todos"));
//     //     console.log(getResult);
//     //     if (getResult === null) localStorage.setItem("todos", JSON.stringify([{ item, quantity: 0 }]))
//     //     else {
//     //         getResult.push({ item, quantity: 0 });
//     //         localStorage.setItem("todos", JSON.stringify(getResult));
//     //     }
//     // }
//     const addTodo = (item) => {
//         dispatch(addItemsToCart(item));
//         let getResult = JSON.parse(localStorage.getItem("todos"));
//         console.log(getResult);
//         if (getResult === null) localStorage.setItem("todos", JSON.stringify([{ ...item, quantity: 0 }]))
//         else {
//             getResult.push({ ...item, quantity: 0 });
//             localStorage.setItem("todos", JSON.stringify(getResult));
//         }
//     }
//     const getItem = () => {
//         const localItems = JSON.parse(localStorage.getItem('todos'));
//         console.log(localItems);
//         setData(localItems);
//     }

//     const changeData = (data) => {
//         const localItems = JSON.parse(localStorage.getItem('todos'));
//         // console.log(data);
//         localItems.map(({ item }) => {
//             if (item.id === data.item.id) {
//                 const localData = JSON.parse(localStorage.getItem("todos"));
//                 // let unfilterData = localData.filter(({item})=>)
//                 let filterData = localData.filter(({ item }) => item.id !== data.item.id);
//                 data.quantity++;
//                 filterData.push(data);
//                 localStorage.setItem('todos', JSON.stringify(filterData));
//                 console.log(filterData);
//                 getItem();
//                 // data.quantity++;
//                 return true;
//             }
//             return false;
//         }
//         )
//     }
//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
//             <button onClick={(e) => { dispatch(fetchTodo()) }}>Todos</button>
//             <br />
//             <ol style={{ textAlign: 'center' }}>
//                 {
//                     kuch.map((item) => {
//                         return <li style={{ cursor: 'pointer' }} onClick={() => addTodo(item)} key={item.id}>{item.title}</li>
//                     })
//                 }
//             </ol>
//             <button onClick={(e) => { (getItem()) }}>Local Storage</button>
//             <br />
//             <ol style={{ textAlign: 'center' }}>
//                 {
//                     data.map(({ item, quantity }) => {
//                         return <li style={{ cursor: 'pointer' }} onClick={() => changeData({ item, quantity })} key={item.id}>{`${item.title} ${quantity}`}</li>
//                     })
//                 }
//             </ol>
//         </div>
//     )
// }
const Main = () => {
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const { data: todos } = useSelector(state => state.todo);
    const kuch = todos.slice(0, 20);
    const addTodo = (item) => {
        dispatch(addToCart({...item,quantity}));
    }
    const getItem = () => {
        const localItems = JSON.parse(localStorage.getItem('cart'));
        console.log(localItems);
        setData(localItems);
    }
    const handleUpdateCartItem = (item)=>{
        console.log(item)   
        dispatch(updateCartItem(item))
        getItem();
    }
    const incData = (up) => {
        const updatedItem = data.find((item) => item.id === up.id);
        if (updatedItem) {
            var quan = updatedItem.quantity;
            quan += 1;
            console.log(quan);
            handleUpdateCartItem({ ...updatedItem, quantity: quan });
        }
    }
    const decData = (up) => {
        const updatedItem = data.find((item) => item.id === up.id);
        if (updatedItem) {
            var quan = updatedItem.quantity;
            quan -= 1;
            console.log(quan);
            handleUpdateCartItem({ ...updatedItem, quantity: quan });
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={(e) => { dispatch(fetchTodo()) }}>Todos</button>
            <br />
            <ol style={{ textAlign: 'center' }}>
                {
                    kuch.map((item, key) => {
                        return <li style={{ cursor: 'pointer' }} onClick={() => addTodo(item)} key={item.id}>{item.title}</li>
                        // return <div key={key}>
                        //     <li style={{ cursor: 'pointer' }} onClick={() => addTodo(item)} key={item.id}>{item.title}</li>
                        //     <button>inc  </button>
                        //     <br />
                        //     <button>dec</button>
                        // </div>
                    })
                }
            </ol>
            <button onClick={(e) => { (getItem()) }}>Local Storage</button>
            <br />
            <ol style={{ textAlign: 'center' }}>
                {
                    data.map((item, key) => {
                        return <div key={key}>
                            <li key={item.id}>{`${item.title} ${item.quantity}`} </li>
                            <button onClick={() => incData(item)}>inc</button>
                            <br />
                            <button onClick={() => decData(item)}>dec</button>
                        </div>
                    })
                }
            </ol>
        </div>
    )
}

// const Main = () => {
//     const dispatch = useDispatch();
//     const {items,loading,error} = useSelector(state=>state.cartReducer);
//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item));
//     };

//     const handleUpdateCartItem = (item) => {
//         dispatch(updateCartItem(item));
//     };

//     useEffect(() => {
//         console.log('Cart items: ', items);
//     }, [items]);

//     return (
//         <div>
//             <h2>Cart</h2>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>{item.name}</li>
//                 ))}
//             </ul>
//             <button onClick={() => handleAddToCart({ id: Date.now(), name: 'Item' })}>
//                 Add to Cart
//             </button>
//             <br />
//             <button onClick={() => handleUpdateCartItem({ id: items[1].id, name: 'Updated Item' })}>
//                 Update Cart Item
//             </button>
//         </div>
//     );
// };

export default Main
