import BookProvider from './context/BookProvider';
import BookList from './components/BookList';
import './styles/global.css';

function App() {

  return (
    <BookProvider>
      <BookList />
    </BookProvider>

  );
}

export default App;