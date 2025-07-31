import { useState, useEffect } from 'react';
import styles from './Gifs.module.css';
import placeholderImg from '../../assets/placeholderImg.png';

function Gifs({ removeExercise, selectedExercises = [] }) {

    // Use removeExercise as a prop from exercise page to remove exercise on gif-click
    const handleGifClick = (exerciseId) => {
        removeExercise(exerciseId);
    }

    if (selectedExercises.length === 0) {
        return <div className={styles.noGifs}>
            <p>No exercises selected</p>
            <a href="https://www.exercisedb.dev/" target="_blank"><img src={placeholderImg} alt="Exercise DB image" className={styles.placeholderImg}/></a>
        </div>;
    } else {
        return (
            <div className={styles.gifContainer}>
                {selectedExercises.map((exercise) => (
                    <div key={exercise.exerciseId} className={styles.gifDetails}>
                        <h3>{exercise.name}</h3>
                        <h4>Target Muscles: {exercise.targetMuscles}</h4>
                        <p>{exercise.instructions || 'No instructions available'}</p>
                        <img src={exercise.gifUrl || placeholderImg}
                        alt={`${exercise.name} demonstration`} className={styles.gif}
                        onClick={() => handleGifClick(exercise.exerciseId)}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Gifs;

// TO DO:
// LocalStorage sometimes seems to clear itself? 

// DONE:
// Ability to select more than 1 exercise at a time to display, used array.
// Save data to local storage to pull into routine page


// Demo Gifs
            // <div className={styles.gifDetails}>
            //     <h3>Exercise 1</h3>
            //     <p>Exercise description here...</p>
            //     <img src="https://v1.cdn.exercisedb.dev/media/8d8qJQI.gif" alt="Workout GIF 1" className={styles.gif}/>
            // </div>
            // <div className={styles.gifDetails}>
            //     <h3>Exercise 2</h3>
            //     <p>Exercise description here...</p>
            // <img src="https://v1.cdn.exercisedb.dev/media/zYmNaoY.gif" alt="Workout GIF 2" className={styles.gif}/>
            // </div>
            // <div className={styles.gifDetails}>
            //     <h3>Exercise 3</h3>
            //     <p>Exercise description here...</p>
            // <img src="https://v1.cdn.exercisedb.dev/media/C0MA9bC.gif" alt="Workout GIF 3" className={styles.gif}/>
            // </div>
            // <div className={styles.gifDetails}>
            //     <h3>Exercise 4</h3>
            //     <p>Exercise description here...</p>
            // <img src="https://v1.cdn.exercisedb.dev/media/c8oybX6.gif" alt="Workout GIF 3" className={styles.gif}/>
            // </div>