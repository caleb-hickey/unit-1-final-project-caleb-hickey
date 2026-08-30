import BookCard from '../../assets/BookCard.jsx'


function ToBeRead ({ books, toggleOwned, toggleRead, toggleWishList }) {
    const booksReadFalse = books.filter((book) => book.read === false && book.owned === true)
    return (
        <div>
            <h1>To Be Read</h1>
            <section className="bookCardContainer">
            {booksReadFalse.map((book) => (
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
             </section>
        </div>
    );
}

export default ToBeRead;