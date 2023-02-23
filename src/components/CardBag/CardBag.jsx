import React, { useEffect, useState } from 'react';
import styles from './CardBag.module.css';
import { NoImagePokemon } from '../../assets';
import { Navbar, Badge, Container, Table, Row, Col, Card } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardBag = () => {
    const [listPokemon, setListPokemon] = useState([]);

    useEffect(() => {
        setListPokemon(JSON.parse(localStorage.getItem('Pokemons')));
    }, []);

    const removePokemon = (e, name) => {
        let pokemons = JSON.parse(localStorage.getItem('Pokemons'));
        pokemons = pokemons.filter(pokemon => pokemon.name !== name);
        localStorage.setItem("Pokemons", JSON.stringify(pokemons));
        setListPokemon(pokemons);
        toast.success('Your pokemon success to be deleted 👍', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    // pokemons && pokemons.map((data, index) => console.log(data.types))

    const pokemonsInBag = listPokemon && listPokemon.map((data, index) =>
        <Col lg={4} key={data} className='justify-content-center'>
            <Card className={styles['card']}>
                <Navbar style={{padding: '0'}}>
                    <Container style={{padding: '0'}}>
                        <Navbar.Text className={styles['id']} style={{padding: '0'}}>{data.id}</Navbar.Text>
                        <Navbar.Text style={{padding: '0', height: '100%'}}>
                            {
                                data.types.map((type) => <Badge className={styles['type']}>{type.type.name}</Badge>)
                            }{' '}
                        </Navbar.Text>
                        <Navbar.Toggle />
                        <Navbar.Collapse className='justify-content-end'>
                            <Navbar.Text>
                                <img
                                    id={index}
                                    style={{cursor: 'pointer'}}
                                    src={process.env.PUBLIC_URL + '/remove.png'}
                                    alt='remove-button'
                                    onClick={e => removePokemon(e, data.name)} />
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Row style={{alignItems: 'center', height: '200px'}}>
                    <Col lg={12} style={{textAlign: 'center'}}>
                    <Card.Img variant="top" src={
                    data.sprites ? data.sprites.front_default : NoImagePokemon
                    } className={styles['card-image']}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered className={styles['pokemon-main-info']}>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th>Height</th>
                                    <td>{data.height}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table bordered className={styles['pokemon-main-info']}>
                            <thead>
                            <tr>
                                <th style={{backgroundColor: '#67fd9a', textAlign: 'center'}}>HP</th>
                                <th style={{backgroundColor: '#38fff8', textAlign: 'center'}}>Speed</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                {
                                    (data.stats && data.stats[0].base_stat) >= 50 ?
                                    <td width={'50%'} style={{color: "black", fontWeight: "bold", textAlign: 'center'}}>{(data.stats && data.stats[0].base_stat)}</td>
                                    :
                                    <td width={'50%'} style={{color: "red", fontWeight: "bold", textAlign: 'center'}}>{(data.stats && data.stats[0].base_stat)}</td>
                                }
                                <td style={{textAlign: 'center'}}>{data.stats && data.stats[5].base_stat}</td>
                            </tr>
                            <tr>
                                <th style={{backgroundColor: '#FFB9AE', textAlign: 'center'}}>Atk</th>
                                <th style={{backgroundColor: '#FFDFAE', textAlign: 'center'}}>Def</th>
                            </tr>
                            <tr>
                                <td width={'50%'} style={{textAlign: 'center'}}>{data.stats && data.stats[1].base_stat}</td>
                                <td width={'50%'} style={{textAlign: 'center'}}>{data.stats && data.stats[2].base_stat}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Card>
        </Col>
    );

    return (
        <Row>
            { pokemonsInBag }
            <ToastContainer />
        </Row>
    );
};

export default CardBag;
