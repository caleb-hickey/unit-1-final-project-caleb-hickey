import BookCard from '../../assets/BookCard.jsx'


function BooksRead ({ books, toggleOwned, toggleRead, toggleWishList }) {
    const booksReadTrue = books.filter((book) => book.read === true)
    return (
        <div>
            <h1>Books Read</h1>
            {booksReadTrue.map((book) => (
                <BookCard 
                    key={book.id}
                    coverUrl={book.coverUrl}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                    pageLength={book.pageLength}
                    id={book.id}
                    read={book.read}
                    owned={book.owned}
                    wishlist={book.wishlist}
                    toggleOwned={toggleOwned}
                    toggleRead={toggleRead}
                    toggleWishList={toggleWishList}
                />
            ))}
        </div>
    );
}

export default BooksRead;