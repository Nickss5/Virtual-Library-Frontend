import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyLibrary from './pages/MyLibrary';
import { BookProvider } from './context/BookContext'; // Ensure you import BookProvider

const App = () => {
  return (
    <BookProvider> 
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book/:id' element={<BookDetails />} />
          <Route path='/my-library' element={<MyLibrary />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;
