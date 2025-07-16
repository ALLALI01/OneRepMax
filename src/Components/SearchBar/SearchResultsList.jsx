import React, { useState } from 'react';
import SearchResult from './SeachResult.jsx';
import styles from './SearchResultsList.module.css';

function SearchResultsList({ results }) {
    return(
        <div className={styles.resultsList}>
            {
                results.map((result, index) => {
                    return (
                        <SearchResult result={result} key={index}/>
                    );
                })
            }
        </div>
    );
};

export default SearchResultsList;