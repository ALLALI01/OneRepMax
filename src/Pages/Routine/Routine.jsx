import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Table from '../../Components/Table/Table.jsx';
import Gifs from '../../Components/Gifs/Gifs.jsx';
import styles from './Routine.module.css';
import '../../App.css';

function Routine() {
    return(
        <>
            <Header />
            <Table />
            <Gifs />
            <Footer />
        </>
    );
}

export default Routine;