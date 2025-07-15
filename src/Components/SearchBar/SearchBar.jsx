import styles from './SearchBar.module.css';

// async function fetchExercises(searchTerm) {
//     const response = await fetch(`https://wger.de/api/v2/exercise/?name=${searchTerm}`);
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// }

function SearchBar({ searchTerm, setSearchTerm }) {
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.searchBar}>
            <input
                id="exerciseSearch"
                name="exerciseSearch"
                type="text"
                placeholder="Search exercises..."
                value={searchTerm}
                onChange={handleChange}
                className={styles.input}
            />
        </div>
    );
}

export default SearchBar;