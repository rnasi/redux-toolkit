import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { AddTodo } from './components/AddTodo';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList/>
      <AddTodo/>
    </div>
  );
};

export default App
