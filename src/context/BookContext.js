import React, { createContext, useState } from 'react';

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books] = useState([
    {
      id: 1,
      image: 'https://hachette.imgix.net/books/9780762498130.jpg?auto=compress,format',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      rating: 4.7,
      description: 'A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.',
      publication_year: 1925,
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.T55C4BiOVfcS3WFdCM3xdwAAAA?rs=1&pid=ImgDetMain',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      rating: 4.8,
      description: 'A timeless novel of a child\'s moral awakening and a poignant tale of race and justice in the American South.',
      publication_year: 1960,
    },
    {
      id: 3,
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b468d093312907.5e6139cf2ab03.png',
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      rating: 4.6,
      description: 'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
      publication_year: 1949,
    },
    {
      id: 4,
      image: 'https://th.bing.com/th/id/OIP.wcZjPkH4FZD5QYi_2kfxxAHaLS?rs=1&pid=ImgDetMain',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      rating: 4.9,
      description: 'A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.',
      publication_year: 1813,
    },
    {
      id: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/P/0316769487.01.LZZZZZZZ.jpg',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Fiction',
      rating: 4.3,
      description: 'A story about a young boy’s journey through the challenges of adolescence.',
      publication_year: 1951,
    },
  ]);

  const [myLibrary, setMyLibrary] = useState([]);


  const removeFromLibrary = (id) => {
    setMyLibrary(myLibrary.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, myLibrary, removeFromLibrary, setMyLibrary }}>
      {children}
    </BookContext.Provider>
  );
};


export { BookContext, BookProvider };
