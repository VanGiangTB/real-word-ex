import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from "redux-saga";
import authSlice from '../features/auth/authSlice';
import homeSlice from '../features/home/homeSlice';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth"],
}

const rootReducer = combineReducers({
  auth: authSlice,
  home: homeSlice,
}),
 
persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export { store };

