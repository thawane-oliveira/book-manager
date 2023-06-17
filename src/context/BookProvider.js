import { useState, useEffect } from 'react';
import searchBooks from '../helpers/BookFetch';
import PropTypes from 'prop-types';
import BookContext from './BookContext';

function BookProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [initialBooks, setInitialBooks] = useState([]);
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookImage, setBookImage] = useState('');
  const [placeholderImg, setPlaceholderImg] = useState('https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png');

  const fetchBookApi = async () => {
      const result = await searchBooks();
      
      setInitialBooks(result);
      setLoading(false);
  }

  useEffect(() => {
    fetchBookApi();
  }, []);

  const info = {
    initialBooks,
    setInitialBooks,
    bookName,
    setBookName,
    bookImage,
    setBookImage,
    authorName,
    setAuthorName,
    loading,
    setLoading,
    placeholderImg, 
    setPlaceholderImg,
  };

  return (
    <BookContext.Provider value={ info }>
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default BookProvider;
