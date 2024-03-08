import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0,
// }

//! createSlice, permite definir/crear un slice del estado de Redux en un solo lugar.
//? Un slice es una porcion especifica del estado de la aplicacion que incluye 
//? Su propio reducer y las acciones asociadas
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 10
    },
    //* Los reducers definen como cambia el estado del slice, en respuesta a acciones.
    //* Redux Toolkit, permite definir reducers de una manera mas sencilla utilizando
    //* Funciones llamadas "reducers de caso"
    //! Que son simplemente objetos, donde las claves, son los nombres de las acciones, y los
    //! valores son funciones que actualizan el estado en funcion de esas acciones.
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementBy: (state, action) => {
            state.value += action.payload
        }
    },
})

// Action creators are generated for each case reducer function
//! Una Action creator (es un creador de funciones), es una funcion que 
//! crea y devuelve acciones en Redux.
//TODO -> Estas acciones son simplemente objetos que describes un cambio que debe
//TODO -> ocurrir en la aplicacion. (Ex. "Add new TODO", "Delete TODO")

export const { increment, decrement, incrementBy } = counterSlice.actions;