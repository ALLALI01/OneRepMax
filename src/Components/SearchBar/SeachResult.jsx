import styles from './SearchResult.module.css';

function SearchResult({ result, onSelect, onClearSearch }) {
    const handleClick = () => {
        onSelect(result);
        if (onClearSearch) {
            onClearSearch();
        }
    }

    return (
        <div className={styles.searchResult} onClick={handleClick}>{result.name}</div>
    );
}

export default SearchResult;