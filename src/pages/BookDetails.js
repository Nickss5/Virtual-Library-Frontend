import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import {Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import './BookDetails.css'


const BookDetails = () => {
  const { books, myLibrary, setMyLibrary } = useContext(BookContext);
  const { id } = useParams();
  const book = books.find(each => each.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  const addLibrary = (book) => {
    console.log('Adding to library:', book); // Check when you try to add a book
    const bookExists = myLibrary.some((each) => each.id === book.id);
    if (!bookExists) {
      setMyLibrary((prevLibrary) => {
        const newLibrary = [...prevLibrary, book];
        console.log('Updated myLibrary:', newLibrary); // Log the updated library
        return newLibrary;
      });
    } else {
      console.log('Book already exists in library.');
    }
  };

  return (
    <div className = 'details'>
      <navbar className = "navbar"><Link to = "/">
                <FaLongArrowAltLeft className='arrow'/>
            </Link>
        </navbar>
      <img src = {book.image} alt = "cover" className='cover-details'/>
      <div className='details-2'>
            <h1 className = "details-name">{book.title}</h1>
            <p className = "details-author">Author: {book.author} </p>
            <p className = "details-year">Publication Year: {book.publication_year}</p>
            <p className = "details-rating">Rating: {book.rating}</p>
            <p className = "details-genre">Genre: {book.genre}</p>
            <p className = "details-desc">{book.description}</p>
      </div>
      <button className = "library-button" onClick={() => addLibrary(book)}>Add to My Library</button>
    </div>
  );
};

export default BookDetails;
