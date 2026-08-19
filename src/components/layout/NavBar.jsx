import { useState } from 'react'
import HomePage from '../pages/HomePage.jsx'
import OwnedBooks from '../pages/OwnedBooks.jsx'
import SearchPage from '../pages/SearchPage.jsx'
import WishList from '../pages/WishList.jsx'

function NavBar() {
    const [currentPage, setCurrentPage] = useState("HomePage");
    return (
        <div>
            <nav>
                <button onClick={() => setCurrentPage('HomePage')}>Home Page</button>
                <button onClick={() => setCurrentPage('OwnedBooks')}>Owned Books</button>
                <button onClick={() => setCurrentPage('WishList')}>Wish List</button>
                <button onClick={() => setCurrentPage('Search Page')}>Search Page</button>
            </nav>
            {currentPage === 'HomePage' && <HomePage />}
            {currentPage === 'OwnedBooks' && <OwnedBooks />}
            {currentPage === 'WishList' && <WishList />}
            {currentPage === 'Search Page' && <SearchPage />}
        </div>
    )
}


export default NavBar;