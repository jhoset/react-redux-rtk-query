import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemon)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  function onNextPage() {
    dispatch(getPokemons(page))
  }

  return (
    <>
      <h1> Pokemon App </h1>
      <hr />
      <div>
        <button disabled={isLoading} onClick={onNextPage}> Next Page </button>
        <br />
        <span>Loading: </span> {isLoading ? 'TRUE' : 'FALSE'}

      </div>
      <ul>
        {
          pokemons.map(({ name }) => (
            <li style={{ textAlign: 'start' }} key={name} >
              <span> {name} </span>
            </li>
          ))
        }
      </ul>
    </>
  )
}