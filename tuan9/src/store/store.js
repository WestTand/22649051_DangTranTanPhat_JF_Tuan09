import { configureStore } from '@reduxjs/toolkit';
import reduxCounterReducer from './reducer';
import toolkitCounterReducer from './counterSlice';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    reduxCounter: reduxCounterReducer,
    toolkitCounter: toolkitCounterReducer,
    todos: todoReducer
  },
});

export { store };
export default store;
