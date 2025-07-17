import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

// const URL = "https://www.exercisedb.dev/api/v1/exercises";
// const URL = "https://exercisedb-api1.p.rapidapi.com/api/v1/exercises/search";
const URL = "https://exerciseapi-mocha.vercel.app/api/v1/exercises";

function SearchBar({ setResults }) {
    const [input, setInput] = useState('');

    const fetchData = async (value) => {
        const response = await fetch(`${URL}`)
            .then((response) => response.json())
            .then((json) => {
                const results = json.data.filter((data) => {
                    return value && data && data.name && data.name.toLowerCase().includes(value.toLowerCase());
                });
                setResults(results);
                console.log(results);
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
        <button type="submit" className={styles.searchSubmit} onClick={(e) => {
            e.preventDefault();
            fetchData(input);
        }}>Search</button>
        </div>
);
}

export default SearchBar;