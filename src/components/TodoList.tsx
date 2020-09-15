import Todo from './Todo';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickTodo, TodoState } from '../store';

const TodoList: React.FC = () => {
  const todos = useSelector((state: TodoState) => state.todos);

  const dispatch = useDispatch();

  const handleTodoClick = (todoId: number) => {
    dispatch(clickTodo(todoId));
  }

  return <ul>
    {todos.map((todo, index) => (
      <Todo key={index} todo={todo} onClick={handleTodoClick} />
    ))}
  </ul>
};

export default TodoList
