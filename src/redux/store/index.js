import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from'redux-persist/lib/storage'
// import user from '../reducer/index';
// import Reducer from './Reducer';

// const persistConfig = {
//   key: 'root',
//   Storage: AsyncStorage,

// };

// const persistedReducer = persistReducer(persistConfig, user())

export function user(
  state = {
    id: '',
    id_karyawan: '',
    // name: '',
    tema: '',
    color: '',
    // email: '',
    id_jabatan: '',
    pr_jabatan: '',
    id_kantor: '',
    kantor_induk: '',
    presensi: '',
    jenis: '',
    name: '',
    email: '',
    id_admin_shelter: '',
    id_kacab: '',
    id_wilbin: '',
    id_shelter: '',
  },
  action,
) {
  switch (action.type) {
    case 'CHANGE/USER':
      return { ...state, ...action.payload };
  }

  return state;
}

export const store = createStore(user);
// export const persistor =persistStore(user);

// {
//   switch (action.type) {
//     case user:
//       return action.payload
//     default:
//       return user
//   }

//   return state
// }
// case 'id':
//   return { ...state, id: action.payload };
// case 'id_karyawan':
//   return { ...state, id_karyawan: action.payload };
// case 'presensi':
//   return { ...state, presensi: action.payload };
// case 'akun':
//   return { ...state, akun: action.payload };

// import { createStore, combineReducers } from 'redux';
// import getdatareducers from '../reducers/getdatareducers';

// const rootReducer = combineReducers(
// { get: getdatareducers }
// );

// const configureStore = () => {
// return createStore(rootReducer);
// }
// export default configureStore;