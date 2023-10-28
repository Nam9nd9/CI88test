import React, { useState, useEffect } from 'react';
import './style.css';
import { Button, Input, Checkbox } from 'antd';
import { Appdata } from './context';

const All = () => {
  const initialVal = {
    value: "",
    error: false,
  };

  const [add, setAdd] = useState(initialVal);
  const { value, error } = add;
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('myData');
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  const onBtnClick = () => {
    if (!value) {
      setAdd({ ...add, error: true });
      return;
    }

    const newtodo = {
      name: value,
      isCompleted: false,
      id: todos.length + 1,
    };

    setTodos([...todos, newtodo]);
    setAdd(initialVal);
    localStorage.setItem('myData', JSON.stringify([...todos, newtodo]));
  };

  const {complate,setComplate} = Appdata();
  setComplate(todos);
  return (
    <div className='add'>
      <div className='ui'>
        <Input placeholder='add details' value={value} onChange={(e) => setAdd({ value: e.target.value, error: false })} />
        <Button type='primary' onClick={onBtnClick}> add </Button>
      </div>
      <p className='error' >{error ? "Enter your detail" : ""} </p>
      <div className='todo-container'>
        {todos.map((item) => {
          const { name, isCompleted, id } = item;
          const btnChange = () => {
            item['isCompleted'] = !item['isCompleted'];
          }

          return (
            <div className='todo-item' key={id}>
              <Checkbox onChange={btnChange} className={`${isCompleted ? "checked" : ""}`}>{name}</Checkbox>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default All;