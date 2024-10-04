import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css'


const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>
      <img src = {book.image} alt = "cover" className='cover'/>
      <h2 className='book-name'>{book.title}</h2>
      <p className='book-author'>Author: {book.author}</p>
      </Link>
    </div>
  );
};

export default BookCard;
