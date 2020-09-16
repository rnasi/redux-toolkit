import React from 'react';
import './App.css';
import TodoList from './features/todos/components/TodoList';
import { AddTodo } from './features/todos/components/AddTodo';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList/>
      <AddTodo/>
    </div>
  );
};

export default App
