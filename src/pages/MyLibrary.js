import React, { useContext, useEffect } from 'react';
import { BookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';
import './MyLibrary.css'

const MyLibrary = () => {
  const { myLibrary, removeFromLibrary } = useContext(BookContext);

  useEffect(() => {
    console.log('myLibrary has been updated:', myLibrary);
  }, [myLibrary]); // This runs every time myLibrary changes

  return (
    <div>
        <navbar className = "navbar1"><Link to = "/">Home</Link></navbar>
      {myLibrary.length === 0 ? (
        <p>No books in your Library</p>
      ) : (
        
        <div className="books-list">
          {myLibrary.map((book) => ( 
        <div className="book-card">
               
      <Link to={`/book/${book.id}`}>
      <img src = {book.image} alt = "cover" className='cover'/>
      </Link>
      <h2 className='book-name'>{book.title}</h2>
      <p className='book-author'>Author: {book.author}</p>
      <button className =  "remove" onClick={() => removeFromLibrary(book.id)}>Remove</button>
      
    </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLibrary;


