import { useState } from 'react'
import OwnedBooks from '../pages/OwnedBooks.jsx'
import BooksRead from '../pages/BooksRead.jsx'
import ToBeRead from '../pages/ToBeRead.jsx'
import BrowseBooks from '../pages/BrowseBooks.jsx'
import WishList from '../pages/WishList.jsx'

function Library({ books, toggleOwned }) {
    const [currentPage, setCurrentPage] = useState("HomePage");
    return (
        <div>
            <nav>
                <button onClick={() => setCurrentPage('OwnedBooks')}>Owned Books</button>
                <button onClick={() => setCurrentPage('BooksRead')}>Books Read</button>
                <button onClick={() => setCurrentPage('ToBeRead')}>To Be Read</button>
                <button onClick={() => setCurrentPage('WishList')}>Wish List</button>
                <button onClick={() => setCurrentPage('BrowseBooks')}>BrowseBooks</button>
            </nav>
            {currentPage === 'OwnedBooks' && <OwnedBooks books={books} toggleOwned={toggleOwned}/>}
            {currentPage === 'BooksRead' && <BooksRead books={books} toggleOwned={toggleOwned}/>}
            {currentPage === 'ToBeRead' && <ToBeRead books={books} toggleOwned={toggleOwned}/>}
            {currentPage === 'WishList' && <WishList books={books} toggleOwned={toggleOwned}/>}
            {currentPage === 'BrowseBooks' && <BrowseBooks />}
        </div>
    )
}


export default Library;