import { useState } from 'react'
import Library from './components/layout/Library.jsx'
import BookList from './assets/bookList.js'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'

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
          <Library books={books} toggleOwned={toggleOwned}/>
          <Footer />
        </div>
    </>
  );
}

export default App;
