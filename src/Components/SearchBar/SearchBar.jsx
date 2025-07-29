import {useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';
import useDebounce from '../../Hooks/useDebounce.jsx';

// const URL = "https://www.exercisedb.dev/api/v1/exercises"; OLD
// const URL = "https://exercisedb-api1.p.rapidapi.com/api/v1/exercises/search"; OLD
const URL = "https://exerciseapi-mocha.vercel.app/api/v1/exercises?offset=0&limit=100"; // Updated URL to self hosted Vercel API for 0 limits on requests

function SearchBar({ setResults }) {
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchValue = useDebounce(searchValue, 500);

    const fetchData = async (value) => {
        if (!value.trim()) {
            setResults([]);
            return;
        }
        try {
            const response = await fetch(`${URL}`);
            const json = await response.json();
            const results = json.data.filter((data) => {
                return data && data.name && data.name.toLowerCase().includes(value.toLowerCase());
            });
        setResults(results);
        console.log(results);
        } catch (error) {
            console.error("Error fetching data:", error);
            setResults([]);
        };
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const clearSearchValue = () => { // How can I pass clearSearchValue as a prop so I can use this in the searchResult component in the handleResultClick function?
        setSearchValue('');
    }

    useEffect(() => {
        fetchData(debouncedSearchValue);
    }, [debouncedSearchValue]);

    return (
        <form
            className={styles.searchContainer}
            onSubmit={(event) => {
                event.preventDefault();
                fetchData(searchValue);
            }}
        >
            <FaSearch className={styles.searchIcon}/>
            <input
                className={styles.searchForm}
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search for exercises..."
            />
            <button type="submit" className={styles.searchSubmit}>
                Search
            </button>
        </form>
    )};

export default SearchBar;

// TO DO:
// Switch pages between all 15 pages of data in API call
// Clear text from the search bar when a result is clicked

// DONE:
// Debounce the fetch to reduce API calls