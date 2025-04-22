import { configureStore } from '@reduxjs/toolkit';
import reduxCounterReducer from './reducer';
import toolkitCounterReducer from './counterSlice';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    reduxCounter: reduxCounterReducer,
    toolkitCounter: toolkitCounterReducer,
    todos: todoReducer,
    theme: themeReducer
  },
});

export { store };
export default store;
