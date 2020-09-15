import React from 'react';
import { TodoModel } from '../store';

interface Props {
  onClick: (todoId: number) => void;
  todo: TodoModel;
}


const Todo: React.FC<Props> = (props: Props) => {
  return <li
  onClick={() => props.onClick(props.todo.id)}
  style={{
    textDecoration: props.todo.completed ? 'line-through' : 'none'
  }}
  >
    {props.todo.text}
  </li>;
};

export default Todo
