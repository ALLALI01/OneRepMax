import styles from './Gifs.module.css';

// async function fetchGifs() {
//     try {
//         const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=workout&limit=4&offset=0&rating=g&lang=en');
//         const data = await response.json();
//         return data.data.map(gif => gif.images.original.url);
//     } catch (error) {
//         console.error('Error fetching GIFs:', error);
//         return [];
//     }
// }

const URL = "https://www.exercisedb.dev"

async function grabData() {
    try {
        const response = await fetch(`${URL}/exercises`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        return [];
    }
}

function Gifs() {
    return (
        <div className={styles.gifContainer}>
            {/* Add gifs dynamically from API */}
            <img src="https://media.giphy.com/media/3o7aD2saq1d0c5b4gk/giphy.gif" alt="Workout GIF 1" />
            <img src="https://media.giphy.com/media/l0MYt5jv6z8xW8Y9C/giphy.gif" alt="Workout GIF 2" />
            <img src="https://media.giphy.com/media/3o7aD2saq1d0c5b4gk/giphy.gif" alt="Workout GIF 3" />
            <img src="https://media.giphy.com/media/3o7aD2saq1d0c5b4gk/giphy.gif" alt="Workout GIF 3" />
        </div>
    );
}

export default Gifs;