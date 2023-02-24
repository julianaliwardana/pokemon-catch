import React, { useRef, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col }from 'react-bootstrap';
import { CardPokemon } from '../../../components';
import { PokemonContext } from '../../../context';
import styles from './PokemonContainer.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PokemonContainer = () => {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const pokemonCtx = useContext(PokemonContext);
    let oldData = [];

    useEffect(() => {
        setCount(JSON.parse(window.localStorage.getItem('pokemon-catch-count')));
    }, []);

    const clearHandleClick = () => {
        setValue('');
    };

    const handleKeypress = e => {
        e.preventDefault();
        if (e.key === "Enter") {
            setValue(inputRef.current.value);
        }
    };

    const catchHandleClick = () => {
        if (count === 0) {
            localStorage.setItem("Pokemons", JSON.stringify([pokemonCtx.pokemonData]));
        } else if (count > 0) {
            oldData = JSON.parse(localStorage.getItem('Pokemons'));
            const isStore = oldData.find((pokemon) => pokemon.name === value)

            if (isStore === undefined) {
                localStorage.setItem("Pokemons", JSON.stringify([...oldData, pokemonCtx.pokemonData]));
                toast.success('Yeayy you got the pokemon ^_^', {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                console.log("Pokemon already inside the bag");
                toast.error('Nooo, This Pokemon already inside the bag:(', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }
        console.log(count);
        setCount(count + 1);
        localStorage.setItem('pokemon-catch-count', count);
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
                    <Form.Control
                        type="search"
                        ref={inputRef}
                        placeholder="Search"
                        className={styles['search']}
                        aria-label="Search"
                        onKeyUp={handleKeypress}
                    />
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
                <ToastContainer />
            </div>
        </section>
    );
};

export default PokemonContainer;
