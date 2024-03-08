import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";
import { todosApi } from "./apis";

//? configureStore, es una funcion proporcionada por Redux Toolkit
//? se utiliza para configurar y crear un STORE de REDUX
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
                                        .concat(todosApi.middleware)
})