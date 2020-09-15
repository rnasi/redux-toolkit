import { ADD_TODO, TOGGLE_TODO } from './actions';
import { TodoModel, TodoState } from './DataTypes';
import { createStore } from 'redux';

export const initState: TodoState = {
  todos: [],
  nextId: 1,
};

export const reducer = (state: TodoState = initState, action: any): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        nextId: state.nextId + 1,
        todos: [...state.todos, new TodoModel(state.nextId, action.text)],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: TodoModel) => {
          if (todo.id === action.todoId) {
            // @ts-ignore
            return {...todo, completed: !todo.completed} as TodoModel;
          }
          return todo;
        }),
      };
    default:
      return {...state};
  }
};

export const store = createStore(reducer, initState);
