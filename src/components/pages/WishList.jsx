import BookCard from '../../assets/BookCard.jsx'


function WishList ({ books, toggleOwned, toggleRead, toggleWishList }) {
    const booksOnWishList = books.filter((book) => book.wishlist === true)
    return (
        <div>
            {booksOnWishList.map((book) => (
                <BookCard
                    key={book.id} 
                    coverUrl={book.coverUrl}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                    pageLength={book.pageLength}
                    id={book.id}
                    toggleOwned={toggleOwned}
                    toggleRead={toggleRead}
                    toggleWishList={toggleWishList}
                />
            ))}
        </div>
    );
}

export default WishList

//code from the practice-react-app project will be helpful in loading cards onto this page