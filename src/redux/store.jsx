import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greeting/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
