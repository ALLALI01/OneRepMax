import React, { useState } from 'react';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import SearchResultsList from '../../Components/SearchBar/SearchResultsList.jsx';
import Gifs from '../../Components/Gifs/Gifs.jsx';
import styles from './Exercises.module.css';
import '../../App.css';


function Exercises() {
    const [results, setResults] = useState([]);

    return(
        <>
            <Header />
            <SearchBar setResults={setResults}/>
            <SearchResultsList results={results}/>
            <Gifs />
            <Footer />
        </>
    );
}

export default Exercises;