import React from 'react';
import './SearchBar.css'


const SearchBar = ({ setSearchQuery }) => {
    return (
        <input 
            type = "text"
            placeholder = "Search"
            className='search-bar'
            onChange = {(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default SearchBar