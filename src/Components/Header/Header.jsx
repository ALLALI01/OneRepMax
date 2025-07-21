import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <h1 className={styles.siteTitle}>One Rep Max</h1>
            <nav className={styles.nav}>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/routine'>
                    <button>12-Week Routine</button>
                </Link>
                <Link to='/exercises'>
                    <button>Exercises</button>
                </Link> 
            </nav>
        </header>
    );
}

export default Header;