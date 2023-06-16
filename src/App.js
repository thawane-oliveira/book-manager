import BookProvider from './context/BookProvider';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {

  return (
    <BookProvider>
      <main>
      <BookList />
      <BookDetails />
      </main>
    </BookProvider>

  );
}

export default App;