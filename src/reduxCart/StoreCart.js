import { configureStore } from '@reduxjs/toolkit'
import counterslice from "./ReducerCart"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, counterslice)

export const Store = configureStore({

    
  reducer: {

      counter: persistedReducer
  },
})

export let persistor = persistStore(Store)