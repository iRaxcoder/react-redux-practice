import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {isLoading && <h4>Loading...</h4>}
      <ul>
        {pokemons.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

      <h4>page: {page}</h4>
      <button
        style={{ margin: "10px" }}
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page, true))}
      >
        Previous
      </button>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page, false))}
      >
        Next
      </button>
    </>
  );
};
