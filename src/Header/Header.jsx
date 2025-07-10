import styles from './Header.module.css';

function Header() {
    return(
        <header>
            <h1>One Rep Max</h1>
            <nav className={styles.nav}>
                <a href='../App.jsx'>Home</a>
                <a href='../Routine.jsx'>12-Week Routine</a>
                <a href='../Exercises.jsx'>Exercises</a> 
            </nav>
        </header>
    );
}

export default Header;