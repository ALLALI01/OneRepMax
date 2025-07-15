import styles from './Home.module.css';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Card from '../../Components/Card/Card.jsx';
import {useState} from 'react';

function Home() {
    const [showCard, setShowCard] = useState(false);
    const handleClick = () => {
        setShowCard((prev) => !prev);
    };
    return(
        <>
        <Header />
        <main className={styles.main}>
            <div className={styles.intro}>
                <h2>Welcome!</h2>
                <p>Your go-to solution for calculating a 12-week workout routine based on your one-rep maxes!</p>
                <p>Get started by venturing to the exercises section. Pull the exercises you like to do and input your max weight for each, the calculator will do the rest!</p>
                <p>Then view your customized 12-week routine.</p>
            </div>
            <div className={styles.authorContainer}>
                <button onClick={handleClick} className={styles.button}>
                    {showCard ? "Hide Author" : "Website Design By"}
                </button>
                    {showCard && <Card />}
            </div>
        </main>
        <Footer />
        </>
    );
}

export default Home;
