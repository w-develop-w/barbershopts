import { configureStore } from "@reduxjs/toolkit";
import dataOfBarbershopReducer from "./dataSlice";
import fetchDataServices from "../api/fetchDataServices";
import fetchDataSpecialists from "../api/fetchDataSpecialists";

const store = configureStore({
  reducer: {
    dataOfBarbershop: dataOfBarbershopReducer,
    [fetchDataServices.reducerPath]: fetchDataServices.reducer,
    [fetchDataSpecialists.reducerPath]: fetchDataSpecialists.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      fetchDataServices.middleware,
      fetchDataSpecialists.middleware
    ),
});

export default store;

// Определение RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
