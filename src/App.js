import BookProvider from './context/BookProvider';
import BookList from './components/BookList';
import './App.css';

function App() {

  return (
    <BookProvider>
      <main>
      <BookList />
      </main>
    </BookProvider>

  );
}

export default App;