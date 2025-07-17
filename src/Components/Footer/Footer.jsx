import styles from './Footer.module.css';

function Footer() {
    return(
        <footer>
            <h6>&copy; {new Date().getFullYear()} One Rep Max</h6>
            <h6>Credit and special thanks to: <a href="https://www.exercisedb.dev/" target="_blank"> ExerciseDB - Open Source API </a></h6>   
        </footer>
    );
}


export default Footer;