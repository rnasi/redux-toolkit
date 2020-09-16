import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './features/todos/TodoSlice';

// This does combine reducers, applies default middleware including thunk, and sets up the store all in one
export const store = configureStore(
  {
    reducer: {
      todos: todoSlice.reducer,
      // For more reducers, just name and all it here as above.
    },
  },
);

// Automatically generates a type for application state
export type RootState = ReturnType<typeof store.getState>
