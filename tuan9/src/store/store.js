import { configureStore } from '@reduxjs/toolkit';
import reduxCounterReducer from './reducer';
import toolkitCounterReducer from './counterSlice';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    reduxCounter: reduxCounterReducer,
    toolkitCounter: toolkitCounterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer
  },
});

export { store };
export default store;
