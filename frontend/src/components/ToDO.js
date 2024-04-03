import React from 'react';
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';

const ToDo = ({ text, updateMode, deleteMode }) => {
  return (
    <div>
      <div className='todo'>
        <div className='text'>{text}</div>
        <div className='icons'> 
          <MdOutlineEdit className='icon' onClick={updateMode} />
          <MdDeleteOutline className='icon' onClick={deleteMode} />
        </div>
      </div>
    </div>
  );
}

export default ToDo;
