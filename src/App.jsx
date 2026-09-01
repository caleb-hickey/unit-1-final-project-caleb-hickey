import { useState } from 'react'
import React from 'react';
import { Routes, Route, Link } from 'react-router';
import BookList from './assets/bookList.js'
import Header from './components/layout/Header.jsx'
import HomePage from './components/pages/HomePage.jsx'
import About from './components/pages/About.jsx'
import FeedbackForm from './components/pages/FeedbackForm.jsx'
import Library from './components/layout/Library.jsx'
import Footer from './components/layout/Footer.jsx'

// Learned that the booklist needed to be in state at this level, instead of on the individual page components. If it had been in state on each page, it would have been in its own state, and the pages would not have agreed with each other.

// These three functions within App are the logic to toggle the bool values of their respective statuses, removing or adding them from the page. I also added logic to the owned and wishlist buttons so that if you click that you own a book, it will both move the book to your owned collection and remove it from your wishlist, and vice verses for adding a book to your wish list

function App() {
  const [books, setBooks] = useState(BookList);
  function toggleOwned(id) {
      setBooks((currentBooks) =>
        currentBooks.map((book) => book.id === id ? { ...book, owned: !book.owned, wishlist: false} : book )
    )}
  function toggleRead(id) {
    setBooks((currentBooks) =>
    currentBooks.map((book) => book.id === id ? { ...book, read: !book.read} : book)
  )}
  function toggleWishList(id){
    setBooks((currentBooks) =>
      currentBooks.map((book) => book.id === id ? {...book, wishlist: !book.wishlist, owned: false} : book))
  }
return (
    <>
        <div>
          <section className="topOfPage">
          <Header />
          <nav className="navBar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/library">Library</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </nav>
          </section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element={<Library 
              books={books} 
              toggleOwned={toggleOwned}
              toggleRead={toggleRead}
              toggleWishList={toggleWishList}
            />} />
            <Route path="/feedback" element={<FeedbackForm />} />
          </Routes>
          <Footer />
        </div>
    </>
  );
}

export default App;