import React, { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import ToDo from './components/ToDO.js';
import { addToDo, getAllToDo, updateToDo, deleteToDo } from './utils/handleApi.js';
import Footer from './components/footer.js';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState('');

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>TODO App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add todos....."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? 'Update' : <CiEdit />} Add
          </div>
        </div>
      </div>
      <div className="list">
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteMode={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
