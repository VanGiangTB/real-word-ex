import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authSlice from '../features/auth/authSlice';
import createSagaMiddleware from "redux-saga"
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)
