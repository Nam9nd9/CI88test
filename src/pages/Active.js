import React, { useState } from 'react'
import './style.css'
import {Button, Input , Checkbox} from 'antd'
import Item from 'antd/es/list/Item';
import { Appdata } from './context';


const Active = () => {
  const { complate, setComplate } = Appdata
    const onChange = (e) => {
       todos.isCompleted=!todos.isCompleted
       console.log(todos.isCompleted);
      };
    const initialVal = {
        value:"",
        error : false,};
    const [add, setAdd] = useState([initialVal]);
    const { value , error } = add;
    const[todos, setTodos] = useState([]);
    const onBtnClick = () =>{
        if (!value) {
            setAdd({ ...add,error : true})
            return;
        
      };
      const newtodo = {
        name:value,
        isCompleted : false,
        id:todos.length +1,
      }

setTodos([...todos,newtodo]);
    setAdd(initialVal);}

    // console.log(todos);
  return (
    <div className='add'>
        <div className='ui'>
        <Input placeholder='add details' value={value} onChange={(e)=> setAdd({value : e.target.value , error :false})} />
        <Button type='primary' onClick={onBtnClick}> add </Button>
        </div>
        <p className='error' >{ error ? "Enter your detail" : ""} </p>
        <div className='todo-container'>
            {todos.map((item)=>(
                <div className='todo-item' key={item.id}>
                    <Checkbox onChange={onChange} className={`${item.isCompleted ? "checked" : ""}`}/>
                    <a>{item.name}</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Active