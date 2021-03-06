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
// You can syntactically mutate state directly here (for the most part) and toolkit will take care to make a copy first.
// e.g. on line 25 we can just call `push` on the state variable instead of copying the whole array, adding to it, and
// reassigning our new variable to the state variable.
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

// This creates actions automatically. These actions by default are functions that accept an optional generic object as
// an argument, which can be accessed in the reducer as `action.payload`. Any parameters you need for the action can be
// put into this generic object.
// For example:
//  dispatch(addTodo({text: 'hello'}));
// will make line 25 work with action.payload.text being 'hello'.
export const {
  addTodo,
  toggleTodo,
} = todoSlice.actions;

export const todoInitState = initState;

export default todoSlice;

