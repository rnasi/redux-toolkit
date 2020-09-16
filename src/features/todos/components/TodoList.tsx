import Todo from './Todo';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { toggleTodo } from '../TodoSlice';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const dispatch = useDispatch();

  const handleTodoClick = (todoId: number) => {
    dispatch(toggleTodo({todoId: todoId}));
  }

  return <ul>
    {todos.map((todo, index) => (
      <Todo key={index} todo={todo} onClick={handleTodoClick} />
    ))}
  </ul>
};

export default TodoList
