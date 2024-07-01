import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import characterReducer from './slices/characterSlice';
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { charactersApi } from "../services/charactersService";

const rootReducer = combineReducers({
    user: userReducer,
    character: characterReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer =  persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(charactersApi.middleware),
})

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;