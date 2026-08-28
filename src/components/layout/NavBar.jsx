import { useState } from 'react'
import HomePage from '../pages/HomePage.jsx'
import OwnedBooks from '../pages/OwnedBooks.jsx'
import BooksRead from '../pages/BooksRead.jsx'
import BooksUnread from '../pages/BooksUnread.jsx'
import SearchPage from '../pages/SearchPage.jsx'
import WishList from '../pages/WishList.jsx'

function NavBar({ books, toggleOwned }) {
    const [currentPage, setCurrentPage] = useState("HomePage");
    return (
        <div>
            <nav>
                <button onClick={() => setCurrentPage('HomePage')}>Home Page</button>
                <button onClick={() => setCurrentPage('OwnedBooks')}>Owned Books</button>
                <button onClick={() => setCurrentPage('BooksRead')}>Books Read</button>
                <button onClick={() => setCurrentPage('BooksUnread')}>Books Unread</button>
                <button onClick={() => setCurrentPage('WishList')}>Wish List</button>
                <button onClick={() => setCurrentPage('Search Page')}>Search Page</button>
            </nav>
            {currentPage === 'HomePage' && <HomePage />}
            {currentPage === 'OwnedBooks' && <OwnedBooks books={books} toggleOwned={toggleOwned}/>}
            {currentPage === 'BooksRead' && <BooksRead books={books} toggleOwned={toggleOwned}/>}
            {currentPage === 'BooksUnread' && <BooksUnread books={books} toggleOwned={toggleOwned}/>}
            {currentPage === 'WishList' && <WishList books={books} toggleOwned={toggleOwned}/>}
            {currentPage === 'Search Page' && <SearchPage />}
        </div>
    )
}


export default NavBar;