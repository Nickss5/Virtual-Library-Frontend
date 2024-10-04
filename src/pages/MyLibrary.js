import React, { useContext, useEffect } from 'react';
import { BookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import './MyLibrary.css'

const MyLibrary = () => {
  const { myLibrary, removeFromLibrary } = useContext(BookContext);

  useEffect(() => {
    console.log('myLibrary has been updated:', myLibrary);
  }, [myLibrary]); // This runs every time myLibrary changes

  return (
    <div className = "library-container">
        <navbar className = "navbar1"><Link to = "/">
                <FaLongArrowAltLeft className='arrow'/>
            </Link>
        </navbar>
       {myLibrary.length === 0 ? (
         <p>No books in your Library</p>
        ) : (
        <div className="books-list1">
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


