import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

const URL = "https://www.exercisedb.dev/api/v1/exercises";

function SearchBar({ setResults }) {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
        fetch(`${URL}`)
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((data) => { // WHY IS THIS SAYING JASON.FILTER IS NOT A FUNCTION? DRIVING ME BONKERS BRO
                    return value && data && data.name && data.name.toLowerCase().includes(value.toLowerCase());
                });
                console.log(results);
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className={styles.searchContainer}>
            <FaSearch className={styles.searchIcon}/>
            <input className={styles.searchForm}
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search for exercises..."
            />
        <button type="submit" className={styles.searchSubmit}>Search</button>
        </div>
    );
}

export default SearchBar;