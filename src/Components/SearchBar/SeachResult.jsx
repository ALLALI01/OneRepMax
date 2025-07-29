import styles from './SearchResult.module.css';

function SearchResult({ result, onSelect, onClearSearch }) {
    const handleResultClick = () => {
        onSelect(result);
        if (onClearSearch) {
            onClearSearch();
        }
    }

    return (
        <div className={styles.searchResult} onClick={handleResultClick}>{result.name}</div>
    );
}

export default SearchResult;