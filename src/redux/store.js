import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web
import storage from 'redux-persist/lib/storage'

import userReducer from './reducers';
// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,

// };
// const rootReducer = combineReducers({
//     userReducer: persistReducer(persistConfig, userReducer)
//   });
  
  // export const Store = createStore(userReducer, applyMiddleware(thunk));
  // export const persistor = persistStore(Store);

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import userReducer from './reducers';

// const persistConfig = {
//   key: 'root',
//   storage: localStorage,

// };
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//     let Store = createStore(persistedReducer)
//     let persistor = persistStore(Store)
//     return { Store, persistor }
// }
// const rootReducer = combineReducers({ userReducer });

// export const Store = createStore(rootReducer, applyMiddleware(thunk));