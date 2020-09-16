import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../TodoSlice';

export const AddTodo: React.FC = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({text: text}));
    setText('');
  }

  const inputText = (event: any) => {
    setText(event.target.value);
  }

  return (
    <div>
      <input value={text} onChange={inputText}/>
      <div onClick={handleAddTodo}>Submit</div>
    </div>
  );
};
