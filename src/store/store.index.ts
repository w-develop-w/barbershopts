import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage/session";
import dataOfBarbershopReducer from "./dataSlice";
import fetchDataServices from "../api/fetchDataServices";
import fetchDataSpecialists from "../api/fetchDataSpecialists";

const persistConfig = {
  key: "root", // Ключ для хранения данных в хранилище
  storage, // Используем sessionStorage для сохранения данных
//   serialize: false, 
};

const persistedReducer = persistReducer(persistConfig, dataOfBarbershopReducer);

const store = configureStore({
  reducer: {
    dataOfBarbershop: persistedReducer,
    [fetchDataServices.reducerPath]: fetchDataServices.reducer,
    [fetchDataSpecialists.reducerPath]: fetchDataSpecialists.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      fetchDataServices.middleware,
      fetchDataSpecialists.middleware
    ),
});

export const persistor = persistStore(store);

export default store;

// Определение RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
