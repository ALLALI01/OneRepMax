import profilePic from '../../assets/profilePic.jpg';
import styles from './Card.module.css';

function Card() {
    return(
        <div className={styles.card}>
            <img className={styles.cardImg} src={profilePic} alt='profile picture'></img>
            <h2 className={styles.cardName}>Aaron LaLiberty</h2>
            <h3 className={styles.cardTitle}>Web Developer</h3>
            <p className={styles.cardText}>Student @ <a href='https://code-you.org/' target='_blank'>Code:You</a></p>
        </div>
    );
}

export default Card;
