import styles from './Footer.module.css';

function Footer() {
    return(
        <footer>
            <h6>&copy; {new Date().getFullYear()} One Rep Max</h6>   
        </footer>
    );
}


export default Footer;