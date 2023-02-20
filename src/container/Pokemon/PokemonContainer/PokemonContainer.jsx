import React from 'react';
import { Form, Button }from 'react-bootstrap';
import styles from './PokemonContainer.module.css';

const PokemonContainer = () => {
  return (
    <section className={styles['pokemon-catch']}>
      <div className={styles['container']}>
        <h1 className={styles['title']}>List Of Pokemon</h1>
          <Form className={styles['form']}>
            <Form.Control
              type="search"
              placeholder="Search"
              className={styles['search']}
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        <div className={styles['info']}>
          Card
        </div>
      </div>
    </section>
  );
};

export default PokemonContainer;
