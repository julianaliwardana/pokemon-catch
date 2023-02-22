import React, { useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col }from 'react-bootstrap';
import { CardPokemon } from '../../../components';
import { PokemonContext } from '../../../context';
import styles from './PokemonContainer.module.css';

const PokemonContainer = () => {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');
    const pokemonCtx = useContext(PokemonContext);

    const clearHandleClick = () => {
        setValue('');
    };

    const handleKeypress = e => {
        console.log("masuk");
        setValue(inputRef.current.value);
    };

    console.log(pokemonCtx.count);

    const catchHandleClick = () => {
        console.log(pokemonCtx.pokemonData);
        if (pokemonCtx.count === 0) {
            console.log(pokemonCtx.count);
            localStorage.setItem("Pokemons", JSON.stringify([pokemonCtx.pokemonData]));
        } else {
            console.log(pokemonCtx.count);
            let oldData = JSON.parse(localStorage.getItem('Pokemons'));
            localStorage.setItem("Pokemons", JSON.stringify([...oldData, pokemonCtx.pokemonData]));
        }
        pokemonCtx.setCount(pokemonCtx.count + 1);
        setValue('');
    }

    return (
        <section className={styles['pokemon-catch']}>
            <div className={styles['container']}>
                <section className={styles['nav']}>
                    <div className={styles['float-button']}>
                        <Link to="/bag">
                        <Button style={
                            {
                            color: "black",
                            border: "none",
                            fontWeight: "bold",
                            backgroundColor: "#FFFF",
                            width: "75px",
                            height: "75px",
                            boxShadow: "0px 0px 11px 0px rgba(0,0,0,0.24)"
                            }
                        }>BAG</Button>
                        </Link>
                    </div>
                    <h1 className={styles['title']}>List Of Pokemon</h1>
                </section>
                <Form className={styles['form']}>
                    <Form.Control
                        type="search"
                        ref={inputRef}
                        placeholder="Search"
                        className={styles['search']}
                        aria-label="Search"
                        onKeyUp={handleKeypress}
                    />
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
                        onClick={catchHandleClick}>TANGKAP</Button>
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
