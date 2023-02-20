import React, { useRef, useState } from 'react';
import { Form, Button }from 'react-bootstrap';
import { CardPokemon } from '../../../components';
import styles from './PokemonContainer.module.css';

const PokemonContainer = () => {

  const inputRef = useRef(null);

  const [value, setValue] = useState('');

  const handleClick = () => {
    setValue(inputRef.current.value);
  };

  return (
    <section className={styles['pokemon-catch']}>
      <div className={styles['container']}>
        <h1 className={styles['title']}>List Of Pokemon</h1>
          <Form className={styles['form']}>
            <Form.Control
              type="search"
              ref={inputRef}
              placeholder="Search"
              className={styles['search']}
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleClick}>Search</Button>
          </Form>
        <div className={styles['info']}>
          <h1>Pokemon Name: {value}</h1>
          <CardPokemon pokemonName={value} />
        </div>
      </div>
    </section>
  );
};

export default PokemonContainer;
