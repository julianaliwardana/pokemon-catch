import React, { createContext, useEffect, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [listPokemon, setListPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    // Fetch Pokemon Data List
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
      .then((res) => res.json())
      .then((data) => {
        return setListPokemon(data.results);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  const value = {
    listPokemon,
    pokemonData,
    setPokemonData,
  };
  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};

export default PokemonContext;
