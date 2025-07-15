import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import Gifs from '../../Components/Gifs/Gifs.jsx';
import styles from './Exercises.module.css';
import '../../App.css';


function Exercises() {
    return(
        <>
            <Header />
            <SearchBar />
            <Gifs />
            <Footer />
        </>
    );
}

export default Exercises;