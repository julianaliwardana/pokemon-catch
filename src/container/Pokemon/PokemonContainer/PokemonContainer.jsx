import React, { useRef, useState } from 'react';
import { Form, Button, Row, Col }from 'react-bootstrap';
import { CardPokemon } from '../../../components';
import styles from './PokemonContainer.module.css';

const PokemonContainer = () => {

  const inputRef = useRef(null);

  const [value, setValue] = useState('');

  const searchHandleClick = () => {
    setValue(inputRef.current.value);
  };
  const clearHandleClick = () => {
    setValue('');
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
            <Button variant="outline-success" onClick={searchHandleClick}>Search</Button>
          </Form>
        <div className={styles['info']}>
          <CardPokemon pokemonName={value} />
        </div>
        <div className={styles['footer']}>
          {
            value ?
            <Row>
              <Col lg={6} className={styles['clear-button']}>
                <Button
                  variant='light'
                  style={{fontWeight:'bold', boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.32)'}}
                  onClick={clearHandleClick}>CLEAR</Button>
              </Col>
              <Col lg={6} className={styles['catch-button']}>
                <Button
                  variant='warning'
                  style={{color:'white', fontWeight:'bold', boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.32)'}}
                  onClick={clearHandleClick}>TANGKAP</Button>
              </Col>
            </Row>
            :
            <Row></Row>
          }
        </div>
      </div>
    </section>
  );
};

export default PokemonContainer;
