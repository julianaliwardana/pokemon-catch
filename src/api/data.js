import axios from "axios";

export const GetPokemonList = () => async (dispatch) => {
    try {
        dispatch({
            type: "POKEMON_LIST_LOADING",
        });

        const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1000`
        );

        dispatch({
            type: "POKEMON_LIST_SUCCESS",
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: "POKEMON_LIST_FAIL",
        });
    }
};
