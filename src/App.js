// import { useContext } from 'react';
// import BookContext from './context/BookContext';
import BookProvider from './context/BookProvider';

function App() {
  // const { initialBooks } = useContext(BookContext);

  return (
    <BookProvider>
      <h1>Book Manager</h1>
      {/* {initialBooks.map((book) => <p>{book.volumeInfo.title}</p>)} */}
    </BookProvider>

  );
}

export default App;