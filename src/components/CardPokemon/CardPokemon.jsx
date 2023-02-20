import React, { useContext, useState, useEffect } from 'react';
import styles from './CardPokemon.module.css';
import { NoImagePokemon } from '../../assets';
import { PokemonContext } from '../../context';

const CardPokemon = (pokemonName) => {
  const pokemonCtx = useContext(PokemonContext);
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    for (let i = 0; i < 1000; i++) {
      if (pokemonCtx.listPokemon[i] && pokemonCtx.listPokemon[i].name === pokemonName.pokemonName) {
        console.log("true");
        fetch(pokemonCtx.listPokemon[i].url)
        .then((res) => res.json())
          .then((data) => setPokemonData(data))
          .catch((e) => console.error(e.message));
      }
    }
  }, [pokemonCtx.listPokemon, pokemonName]);

  console.log(pokemonData.name);

  return (
    <div className={styles.card}>
      <h2>Pokemon Information ({pokemonData.name})</h2>
      <div className={styles['card-image']}>
        <img
          src={
            pokemonData.sprites ? pokemonData.sprites.front_default : NoImagePokemon
          }
          alt="pokemon"
        />
      </div>
    </div>
  );
};

export default CardPokemon;
