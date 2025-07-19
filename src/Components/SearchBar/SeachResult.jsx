import React, { useState } from 'react';
import styles from './SearchResult.module.css';

function SearchResult({ result }) {

    // const handleClick = (e) => {
    //     const [items, setItems] = useState([]);
    //     const addItem = () => {
    //         setItems([...items, result]);
    //     }
    //     addItem();
    //     const gifContainer = document.querySelector(`.${styles.gifContainer}`);
    //     const newDiv = document.createElement('div');
    //     newDiv.className = styles.gifDetails;
    //     newDiv.innerHTML = `
    //         <h3>${result.name}</h3>
    //         <p>${result.instructions || 'No instructions available'}</p>
    //         <img src="${result.gifUrl || 'https://via.placeholder.com/150'}" alt="${result.name}" class="${styles.gif}" />
    //     `;
    //     gifContainer.appendChild(newDiv);
    //     console.log(`Selected exercise: ${result.name}`);
    // };
    return (
        <div className={styles.searchResult} onClick={(e) => alert(`You selected: ${result.name}`)}
            >{result.name}</div>
    );
}

export default SearchResult;