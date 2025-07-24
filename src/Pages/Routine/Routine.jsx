import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Table from '../../Components/Table/Table.jsx';
import Gifs from '../../Components/Gifs/Gifs.jsx';
import styles from './Routine.module.css';
import '../../App.css';

function Routine() {
    const [selectedExercises, setSelectedExercises] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('selectedExercises');
        console.log('Loaded from localStorage:', saved);
    }, []);

    const removeExercise = (exerciseId) => {
        setSelectedExercises(prev => prev.filter(ex => ex.id !== exerciseId));
    };
    return(
        <>
            <Header />
            <Table />
            <Gifs exercises={selectedExercises} onGifSelect={removeExercise} />
            <Footer />
        </>
    );
}

export default Routine;