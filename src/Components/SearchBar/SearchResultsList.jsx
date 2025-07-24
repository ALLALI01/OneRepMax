import React, { useState } from 'react';
import SearchResult from './SeachResult.jsx';
import styles from './SearchResultsList.module.css';

function SearchResultsList({ results, onExerciseSelect, onClearSearch }) {
    return(
        <div className={styles.resultsList}>
            {
                results.map((result, index) => {
                    return (
                        <SearchResult
                        result={result}
                        key={result.exerciseId}
                        onSelect={onExerciseSelect}
                        onClearSearch={onClearSearch}
                        />
                    );
                })
            }
        </div>
    );
};

export default SearchResultsList;