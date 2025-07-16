import React from 'react';
import styles from './SearchResult.module.css';

function SearchResult({ result }) {
    return (
        <div className={searchResult} onClick={(e) => alert(`You clicked ${result.name}`)}>{result.name}</div>
    );
}

export default SearchResult;