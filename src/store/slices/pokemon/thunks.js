import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoading } from "./pokemonSlice"


//! En Redux, un thunk es una funcion que envuelve una accion
//? Esto permite realizar operaciones asincronas y acceder al estado de Redux
//? Dentro de una accion
//! los thunks comunmente se usan para manejar operaciones asincronas, como
//! solicitudes HTTP o accesos a bases de datos, antes de DESPACHAR una accion para
//! actualizar el estado en el estore de Redux
export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoading())

        // TODO: realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json();
        // console.log(data);

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
        // console.log(data);

        dispatch(setPokemons({ page: (page + 1), pokemons: data.results }))
    }
}