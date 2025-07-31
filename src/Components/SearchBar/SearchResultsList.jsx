import SearchResult from './SearchResult.jsx';
import styles from './SearchResultsList.module.css';

function SearchResultsList({ results, onExerciseSelect, setSearchValue }) {
    return(
        <div className={styles.resultsList}>
            {
                results.map((result) => {
                    return (
                        <SearchResult
                        result={result}
                        key={result.exerciseId}
                        onSelect={onExerciseSelect}
                        setSearchValue={setSearchValue}
                        />
                    );
                })
            }
        </div>
    );
};

export default SearchResultsList;