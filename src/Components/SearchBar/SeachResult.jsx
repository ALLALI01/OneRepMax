import styles from './SearchResult.module.css';

function SearchResult({ result, onSelect }) {
    const handleClick = () => {
        onSelect(result);
    }

    return (
        <div className={styles.searchResult} onClick={handleClick}>{result.name}</div>
    );
}

export default SearchResult;