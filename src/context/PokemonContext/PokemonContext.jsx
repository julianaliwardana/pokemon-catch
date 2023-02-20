import React, { createContext, useEffect, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    // Fetch Pokemon Data List
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
    listPokemon,
  };
  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};

export default PokemonContext;
