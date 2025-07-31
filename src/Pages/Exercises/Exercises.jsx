import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import SearchResultsList from '../../Components/SearchBar/SearchResultsList.jsx';
import Gifs from '../../Components/Gifs/Gifs.jsx';
import styles from './Exercises.module.css';

function Exercises() {

    // Set state for components
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedExercises, setSelectedExercises] = useState(() => {
        const saved = localStorage.getItem('selectedExercises');
        return saved ? JSON.parse(saved) : [];
    });

    // Use Local Storage
    useEffect(() => {
        console.log('Saving to localStorage:', selectedExercises);
        localStorage.setItem('selectedExercises', JSON.stringify(selectedExercises));
    }, [selectedExercises]);
    useEffect(() => {
        const saved = localStorage.getItem('selectedExercises');
        console.log('Loaded from localStorage:', saved);
    }, []);

    // Add an exercise
    const addExercise = (exercise) => {
        const existingExercise = selectedExercises.find((ex) => ex.exerciseId === exercise.exerciseId);
        console.log('Existing exercise found:', existingExercise);

        if (!existingExercise) {
            console.log('Adding new exercise...');
            setSelectedExercises(prev => {
                const newArray = [...prev, exercise];
                console.log('New selectedExercises array:', newArray);
                return newArray;
            });
        } else {
            console.log('Exercise already exists, not adding');
        }
    };

    useEffect(() => {
        console.log('Selected exercises updated:', selectedExercises);
    }, [selectedExercises]);

    // Remove an exercise by Gif click or remove all by button click
    const removeExercise = (exerciseId) => {
        setSelectedExercises(prev => prev.filter(ex => ex.exerciseId !== exerciseId));
    };
    const clearAllExercises = () => {
        setSelectedExercises([]);
    }

    return (
        <>
            <Header />
            <SearchBar
            setResults={setResults}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            {results.length > 0 && (
                <SearchResultsList
                    results={results}
                    onExerciseSelect={addExercise}
                    setSearchValue={setSearchValue}
                />
            )}
            <div className={styles.selectedExercises}>
                <h3>Current Exercises</h3>
                {selectedExercises.map(ex => (
                    <p key={ex.exerciseId}>- {ex.name}</p>         
                ))}
                <button className={styles.clearButton} onClick={clearAllExercises}>Clear All</button>
            </div>
            <Gifs selectedExercises={selectedExercises} removeExercise={removeExercise} />
            <Footer />
        </>
    );
}

export default Exercises;