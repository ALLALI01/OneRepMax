import styles from './Gifs.module.css';


function Gifs() {
    return (
        <div className={styles.gifContainer}>
            {/* Add gifs dynamically from API */}
            <div className={styles.gifDetails}>
                <h3>Exercise 1</h3>
                <p>Exercise description here...</p>
                <img src="https://v1.cdn.exercisedb.dev/media/8d8qJQI.gif" alt="Workout GIF 1" className={styles.gif}/>
            </div>
            <div className={styles.gifDetails}>
                <h3>Exercise 2</h3>
                <p>Exercise description here...</p>
            <img src="https://v1.cdn.exercisedb.dev/media/zYmNaoY.gif" alt="Workout GIF 2" className={styles.gif}/>
            </div>
            <div className={styles.gifDetails}>
                <h3>Exercise 3</h3>
                <p>Exercise description here...</p>
            <img src="https://v1.cdn.exercisedb.dev/media/C0MA9bC.gif" alt="Workout GIF 3" className={styles.gif}/>
            </div>
            <div className={styles.gifDetails}>
                <h3>Exercise 4</h3>
                <p>Exercise description here...</p>
            <img src="https://v1.cdn.exercisedb.dev/media/c8oybX6.gif" alt="Workout GIF 3" className={styles.gif}/>
            </div>
        </div>
    );
}

export default Gifs;