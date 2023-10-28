import React, { useCallback, useContext, useState } from 'react';
import { Appdata } from './context';
import { Checkbox, Button } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Complate = () => {
  const { complate, setComplate } = Appdata();
  const done = complate.filter(item => item.isCompleted === true);

  const [del, setDel] = useState([]);

  const btnDel = (index) => {
    const newDone = done.filter(item => item.id !== index);
    setComplate(prevDone => prevDone.filter(item => item.id !== index));
  }

  const deleteAllCompleted = () => {
    setComplate(prevDone => prevDone.filter(item => !item.isCompleted));
  }
  return (
    <div className='complate-body'>
      {done.map((item) => {
        const { name, isCompleted, id } = item;
        return (
          <div className='complate-item' key={id}>
            <Checkbox checked={true} className="checked">{name}</Checkbox>
            <button className='delete' onClick={() => btnDel(id)}>
              <RiDeleteBin6Line />
            </button>
          </div>
        );
      })}
            <Button className={`${! done.length ? 'none' : 'delete-all'}`}onClick={deleteAllCompleted}>Delete All Completed</Button>
    </div>
  )
}

export default Complate;