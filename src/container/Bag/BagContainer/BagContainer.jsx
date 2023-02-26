import { Link } from "react-router-dom";
import { Button }from 'react-bootstrap';
import { CardBag } from '../../../components';
import styles from './BagContainer.module.css';

const BagContainer = () => {
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
                    <h1 className={styles['title']}>BAG ITEM</h1>
                </section>
                <div className={styles['info']}>
                    <CardBag />
                </div>
            </div>
        </section>
    );
};

export default BagContainer;
