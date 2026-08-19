import { useState } from 'react'
import HomePage from './components/pages/HomePage.jsx'
import OwnedBooks from './components/pages/OwnedBooks.jsx'
import SearchPage from './components/pages/SearchPage.jsx'
import WishList from './components/pages/WishList.jsx'
import NavBar from './components/layout/NavBar.jsx'

function App() {
  return (
    <>
        <div>
          <NavBar />
        </div>
    </>
  );
}

export default App;
