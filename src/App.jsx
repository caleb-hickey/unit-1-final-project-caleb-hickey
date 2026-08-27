import { useState } from 'react'
import HomePage from './components/pages/HomePage.jsx'
import OwnedBooks from './components/pages/OwnedBooks.jsx'
import SearchPage from './components/pages/SearchPage.jsx'
import WishList from './components/pages/WishList.jsx'
import NavBar from './components/layout/NavBar.jsx'
import BookList from './assets/bookList.js'
import BookCard from './assets/BookCard.jsx'

function App() {
  const [books, setBooks] = useState(BookList);
  return (
    <>
        <div>
          <NavBar books={books}/>
        </div>
    </>
  );
}

export default App;
