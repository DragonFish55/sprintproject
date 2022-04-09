import { createStore,applyMiddleware } from "redux";

import mainReducer from "./mainReducer";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistedConfig={
    key:"main-root",
    storage,
}

const persistedReducer = persistReducer(persistedConfig, mainReducer)

const store = createStore(persistedReducer, applyMiddleware())

const persistedStore = persistStore(store)

export {persistedStore}
export default store;