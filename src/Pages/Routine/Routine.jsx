import { useState } from 'react';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import RoutineTable from '../../Components/Table/RoutineTable.jsx';
import Gifs from '../../Components/Gifs/Gifs.jsx';
import styles from './Routine.module.css';
import '../../App.css';

function Routine() {

    const [selectedExercises, setSelectedExercises] = useState(() => {
    const saved = localStorage.getItem('selectedExercises');
    console.log('Loaded from localStorage:', saved);
    return saved ? JSON.parse(saved) : [];
    });

    return(
        <>
            <Header />
            <RoutineTable selectedExercises={selectedExercises} />
            <Gifs selectedExercises={selectedExercises} />
            <Footer />
        </>
    );
}

export default Routine;