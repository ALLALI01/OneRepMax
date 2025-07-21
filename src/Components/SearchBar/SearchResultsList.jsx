import React, { useState } from 'react';
import SearchResult from './SeachResult.jsx';
import styles from './SearchResultsList.module.css';

function SearchResultsList({ results, onExerciseSelect }) {
    return(
        <div className={styles.resultsList}>
            {
                results.map((result, index) => {
                    return (
                        <SearchResult
                        result={result}
                        key={index}
                        onSelect={onExerciseSelect}
                        />
                    );
                })
            }
        </div>
    );
};

export default SearchResultsList;