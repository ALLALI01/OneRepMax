import styles from './SearchResult.module.css';

function SearchResult({ result, onSelect, setSearchValue }) {
    const handleResultClick = () => {
        onSelect(result);
        setSearchValue('');
    }

    return (
        <div className={styles.searchResult} onClick={handleResultClick}>{result.name}</div>
    );
}

export default SearchResult;