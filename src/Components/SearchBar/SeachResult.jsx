import React from 'react';
import styles from './SearchResult.module.css';

function SearchResult({ result }) {
    return (
        <div className={styles.searchResult} onClick={(e) => alert(`You clicked ${result.data[1]}`)}>{result.name}</div>
    );
}

export default SearchResult;