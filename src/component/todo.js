import React, { useState } from 'react'
import todo from '../images/todo.svg';
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import '../App.css'



const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    // console.log(items, inputData)

    //To Add Item...
    const addItem = () => {

        if (!inputData) {
            alert("Please input your data")
        } else {
            setItems([...items, inputData])
            setInputData('')
        }
    };

    //To Delete Item...
    const deleteItem = (id) => {
        const updatedItems = items.filter((elem, indx) => {
            return indx !== id
        });
        setItems(updatedItems)
    };


    //To Remove All Items...
    const removeAll = () => {
        setItems([])
    };


    return (
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src={todo} alt='todolist' />
                    <figcaption>Add Your List Here ✌</figcaption>
                </figure>

                <div className='addItems'>
                    <input type="text" placeholder='✍ Add Items...'
                        value={inputData} onChange={(e) => setInputData(e.target.value)}
                    />

                    <FaPlus className="fa add-btn" title='Add Item' onClick={addItem} />
                </div>

                <div className='showItems'>
                    {
                        items.map((elem, indx) => {
                            return (
                                <div className='eachItem' key={indx}>
                                    <h3>{ elem }</h3>
                                    {/* console.log(elem) */}
                                    <FaTrashAlt className="fa add-btn" title='Delete Item' onClick={ () => deleteItem(indx) }/>
                                </div>
                            )
                        })
                    }

                </div>

                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                </div>
            </div>

        </div>
    )
}

export default Todo