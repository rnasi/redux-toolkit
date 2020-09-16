import { createSlice } from '@reduxjs/toolkit';
import { TodoModel } from './TodoModel';

export interface TodoState {
  readonly todos: TodoModel[];
  readonly nextId: number
}

const initState: TodoState = {
  todos: [],
  nextId: 1,
};

// This defines a reducer for todos with a name and initial state. The reducer itself is a key-value pair instead of a
// giant switch statement which cuts down on lines.
const todoSlice = createSlice(
  {
    name: 'todoSlice',
    initialState: initState,
    reducers: {
      addTodo: (state, action) => {
        state.todos.push(new TodoModel(state.nextId, action.payload.text));
        state.nextId++;
      },
      toggleTodo: (state, action) => {
        state.todos = state.todos.map((todo: TodoModel) => {
          if (todo.id === action.payload.todoId) {
            return {...todo, completed: !todo.completed};
          }
          return todo;
        });
      },
    },
  },
);

// This creates actions automatically. You can import these into a component and call them and whatever parameter you
// pass can be accesses in the reducer as action.payload, e.g.:
// dispatch(addTodo({text: 'hello'}));
// will make line 22 work with action.payload.text being 'hello'.
export const {
  addTodo,
  toggleTodo,
} = todoSlice.actions;

export const todoInitState = initState;

export default todoSlice;

