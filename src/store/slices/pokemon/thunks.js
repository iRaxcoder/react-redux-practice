import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = (page = 0, previous = false, limit = 10) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    //HTTP REQUEST
    /*  const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );
    const data = await resp.json(); */
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * limit}`
    );
    const validatePageOffset = () => {
      if (page <= 1 && previous) {
        return 0;
      }
      return !previous ? page + 1 : page - 1;
    };
    dispatch(
      setPokemons({
        pokemons: data.results,
        page: validatePageOffset(),
      })
    );
  };
};
