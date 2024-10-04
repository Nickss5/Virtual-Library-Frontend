import React , { useContext, useState } from 'react';
import {Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import './Home.css'
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const { books } = useContext(BookContext);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        <div className='background'>
          <div className='nav-bar'>
            <img src = 'https://www.borrowbox.com/img/Logo.png' alt = 'background' className = "logo"/>
              <ul className='navigation'>
                <li><Link to = "/" className = "nav">Home</Link></li>
                <li><Link to = "/my-library" className = "nav">My Library</Link></li>
              </ul>
            </div>
          <div className='container1'>
            <div className='container'>
                <h1 className='heading'>The best books for you!</h1>
                <p className='paragraph'>Search for your favourite books.</p>
            </div>
            <SearchBar setSearchQuery={setSearchQuery}/> 
            </div>
         </div>
         <BookList books = {filteredBooks} />
         </>
    );
};

export default Home;