import React, { useContext, useEffect } from 'react';
import styles from './CardPokemon.module.css';
import { NoImagePokemon } from '../../assets';
import { PokemonContext } from '../../context';
import { Row, Col, Card, Table } from 'react-bootstrap';

const CardPokemon = (pokemonName) => {
  const pokemonCtx = useContext(PokemonContext);

  const types = pokemonCtx.pokemonData.types
  ? pokemonCtx.pokemonData.types.slice(0, 5)
  : [];
  const stats = pokemonCtx.pokemonData.stats;

  // console.log(pokemonCtx.listPokemon);

  useEffect(() => {
    for (let i = 0; i < 1000; i++) {
      if (pokemonCtx.listPokemon[i] && pokemonCtx.listPokemon[i].name === pokemonName.pokemonName) {
        fetch(pokemonCtx.listPokemon[i].url)
        .then((res) => res.json())
          .then((data) => pokemonCtx.setPokemonData(data))
          .catch((e) => console.error(e.message));
      }
    }
  }, [pokemonCtx, pokemonCtx.listPokemon, pokemonName]);

  return (
    <Card className={styles['card']}>
      {pokemonName.pokemonName
        ? <Row lg={1} md={2} className="g-5">
            <Col lg={8}>
              <Card.Body>
                <Table striped bordered className={styles['pokemon-main-info']}>
                  <tbody>
                    <tr>
                      <th colSpan={2} width={'20%'}>ID</th>
                      <td colSpan={2} width={'30%'}>{pokemonCtx.pokemonData.id}</td>
                    </tr>
                    <tr>
                      <th colSpan={2}>Name</th>
                      <td colSpan={2}>{pokemonCtx.pokemonData.name}</td>
                    </tr>
                    <tr>
                      <th colSpan={2}>Types</th>
                      <td colSpan={2}>{types.map((type) => type.type.name + ', ')}</td>
                    </tr>
                    <tr>
                      <th colSpan={2}>Height</th>
                      <td colSpan={2}>{pokemonCtx.pokemonData.height}</td>
                    </tr>
                  </tbody>
                </Table>
                <Row>
                  <Col lg={6}>
                    <Table>
                      <tbody>
                        <tr bgcolor='#8EEB9A'>
                          <th>HP</th>
                          {
                            (stats && stats[0].base_stat) >= 50 ?
                            <td width={'20%'} style={{color: "black", fontWeight: "bold"}}>{(stats && stats[0].base_stat)}</td>
                            :
                            <td width={'20%'} style={{color: "red", fontWeight: "bold"}}>{(stats && stats[0].base_stat)}</td>
                          }
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col lg={6}>
                    <Table>
                      <tbody>
                        <tr bgcolor='#12EEFA'>
                          <th>Speed</th>
                          <td width={'20%'}>{stats && stats[5].base_stat}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Table>
                      <tbody>
                        <tr bgcolor='#FFB9AE'>
                          <th>Atk</th>
                          <td width={'20%'}>{stats && stats[1].base_stat}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col lg={6}>
                    <Table>
                      <tbody>
                        <tr bgcolor='#FFDFAE'>
                          <th>Def</th>
                        <td width={'20%'}>{stats && stats[2].base_stat}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
            <Col lg={4} className={styles['col-image']}>
                <Card.Img variant="top" src={
                  pokemonCtx.pokemonData.sprites ? pokemonCtx.pokemonData.sprites.front_default : NoImagePokemon
                } className={styles['card-image']}/>
            </Col>
          </Row>
          :
          <Row lg={1} md={2} className="g-5">
            <Col>
              <h1>No Pokemon Found!</h1>
            </Col>
          </Row>
      }
    </Card>
  );
};

export default CardPokemon;
