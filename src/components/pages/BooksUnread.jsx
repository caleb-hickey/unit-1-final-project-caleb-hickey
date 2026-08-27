import BookCard from '../../assets/BookCard.jsx'


function BooksUnread ({ books }) {
    const booksReadFalse = books.filter((book) => book.read === false && book.owned === true)
    return (
        <div>
            <h1>Books Unread</h1>
            {booksReadFalse.map((book) => (
                <BookCard 
                    coverUrl={book.coverUrl}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                    pageLength={book.pageLength}
                />
            ))}
        </div>
    );
}

export default BooksUnread;