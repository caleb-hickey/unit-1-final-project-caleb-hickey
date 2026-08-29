import { useState } from 'react'
import React from 'react';
import { Routes, Route, Link } from 'react-router';
import BookList from './assets/bookList.js'
import Header from './components/layout/Header.jsx'
import HomePage from './components/pages/HomePage.jsx'
import About from './components/pages/About.jsx'
import Library from './components/layout/Library.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {
  const [books, setBooks] = useState(BookList);
  return (
    <>
        <div>
          <Header />
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/library">Library</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element={<Library books={books} />} />
          </Routes>
          <Footer />
        </div>
    </>
  );
}

export default App;




// function App() {
//   const [books, setBooks] = useState(BookList);
//   const toggleOwned = (id, owned) => {
//     setOwned((current)=>
//       current.map((book) =>
//         book.id === id ? { ...book, owned: !book[owned]}
//     : book
//     ))
//   }