import React from 'react';
import BookCard from './BookCard';
import './BookList.css'

const BookList = ({ books }) => {
  return (
    <div className="books-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
