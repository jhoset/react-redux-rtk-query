import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";

//? configureStore, es una funcion proporcionada por Redux Toolkit
//? se utiliza para configurar y crear un STORE de REDUX
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})