import { useState } from 'react'
import NavBar from './components/layout/NavBar.jsx'
import BookList from './assets/bookList.js'
import Header from './components/layout/Header.jsx'

function App() {
  const [books, setBooks] = useState(BookList);
  const toggleOwned = (id, owned) => {
    setOwned((current)=>
      current.map((book) =>
        book.id === id ? { ...book, owned: !book[owned]}
    : book
    ))
  }
  return (
    <>
        <div>
          <Header />
          <NavBar books={books} toggleOwned={toggleOwned}/>
        </div>
    </>
  );
}

export default App;
