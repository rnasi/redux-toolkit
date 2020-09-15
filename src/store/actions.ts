export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const clickTodo = (todoId: number) => {
  return {
    type: TOGGLE_TODO,
    todoId: todoId,
  };
};

export const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    text: text,
  };
};
