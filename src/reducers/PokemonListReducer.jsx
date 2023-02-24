const InitialState = {
    data: [],
    errorMsg: "",
};

const PokemonListReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "POKEMON_LIST_LOADING":
        return {
            ...state,
            errorMsg: "",
        };
        case "POKEMON_LIST_FAIL":
        return {
            ...state,
            errorMsg: "There is no pokemon to catch",
        };
        case "POKEMON_LIST_SUCCESS":
        return {
            ...state,
            data: action.payload.results,
            errorMsg: "",
        };
        default:
        return state;
    }
};

export default PokemonListReducer;
