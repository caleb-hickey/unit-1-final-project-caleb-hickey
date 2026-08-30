import { useState } from 'react'
import OwnedBooks from '../pages/OwnedBooks.jsx'
import BooksRead from '../pages/BooksRead.jsx'
import ToBeRead from '../pages/ToBeRead.jsx'
import BrowseBooks from '../pages/BrowseBooks.jsx'
import WishList from '../pages/WishList.jsx'

function Library({ books, toggleOwned, toggleRead, toggleWishList }) {
    const [currentPage, setCurrentPage] = useState("BrowseBooks");
    return (
        <div>
            <nav>
                <button onClick={() => setCurrentPage('BrowseBooks')}>BrowseBooks</button>
                <button onClick={() => setCurrentPage('OwnedBooks')}>Owned Books</button>
                <button onClick={() => setCurrentPage('BooksRead')}>Books Read</button>
                <button onClick={() => setCurrentPage('ToBeRead')}>To Be Read</button>
                <button onClick={() => setCurrentPage('WishList')}>Wish List</button>
            </nav>
            {currentPage === 'BrowseBooks' && <BrowseBooks  
                books={books} 
                toggleOwned={toggleOwned}
                toggleRead={toggleRead}
                toggleWishList={toggleWishList}/>}
            {currentPage === 'OwnedBooks' && <OwnedBooks  
                books={books} 
                toggleOwned={toggleOwned}
                toggleRead={toggleRead}
                toggleWishList={toggleWishList}/>}
            {currentPage === 'BooksRead' && <BooksRead  
                books={books} 
                toggleOwned={toggleOwned}
                toggleRead={toggleRead}
                toggleWishList={toggleWishList}/>}
            {currentPage === 'ToBeRead' && <ToBeRead  
                books={books} 
                toggleOwned={toggleOwned}
                toggleRead={toggleRead}
                toggleWishList={toggleWishList}/>}
            {currentPage === 'WishList' && <WishList  
                books={books} 
                toggleOwned={toggleOwned}
                toggleRead={toggleRead}
                toggleWishList={toggleWishList}/>}
        </div>
    )
}


export default Library;