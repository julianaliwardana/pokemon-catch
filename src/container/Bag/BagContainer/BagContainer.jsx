// import React, { useRef, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { Button }from 'react-bootstrap';
// import { CardPokemon } from '../../../components';
// import { PokemonContext } from '../../../context';
import styles from './BagContainer.module.css';

const PokemonContainer = () => {
    // const pokemonCtx = useContext(PokemonContext);
    return (
        <section className={styles['pokemon-catch']}>
            <div className={styles['container']}>
                <section className={styles['nav']}>
                    <div className={styles['float-button']}>
                        <Link to="/">
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
                        }>BACK</Button>
                        </Link>
                    </div>
                    <h1 className={styles['title']}>Bag</h1>
                </section>
                <div className={styles['info']}>
                    {/* <CardPokemon pokemonName={value} /> */}
                </div>
            </div>
        </section>
    );
};

export default PokemonContainer;
