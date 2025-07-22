import React, { useState } from 'react';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import SearchResultsList from '../../Components/SearchBar/SearchResultsList.jsx';
import Gifs from '../../Components/Gifs/Gifs.jsx';

function Exercises() {
    const [results, setResults] = useState([]);
    const [selectedExercises, setSelectedExercises] = useState([]);

    const addExercise = (exercise) => {
        if (!selectedExercises.find((ex) => ex.id === exercise.id)) {
            setSelectedExercises(prev => [...prev, exercise]);
        }
    }
    const removeExercise = (exerciseId) => {
        setSelectedExercises(prev => prev.filter(ex => ex.id !== exerciseId));
    };
    
    return(
        <>
            <Header />
            <SearchBar setResults={setResults} />
            <SearchResultsList results={results} onExerciseSelect={addExercise} />
            <Gifs exercises={selectedExercises} onGifSelect={removeExercise} />
            <Footer />
        </>
    );
}

export default Exercises;