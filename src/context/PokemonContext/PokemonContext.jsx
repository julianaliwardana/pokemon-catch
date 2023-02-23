import React, { createContext, useEffect, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [isStore, setIsStore] = useState(false);
    const [listPokemon, setListPokemon] = useState([]);
    const [listPokemonInBag, setListPokemonInBag] = useState([]);
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then((res) => res.json())
        .then((data) => {
            return setListPokemon(data.results);
        })
        .catch((e) => {
            console.error(e.message);
        });
    }, []);

    // console.log(listPokemon);

    const value = {
        isStore,
        setIsStore,
        listPokemon,
        pokemonData,
        setPokemonData,
        listPokemonInBag,
        setListPokemonInBag,
    };
    return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};

export default PokemonContext;
