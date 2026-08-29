import BookCard from '../../assets/BookCard.jsx'


function ToBeRead ({ books }) {
    const booksReadFalse = books.filter((book) => book.read === false && book.owned === true)
    return (
        <div>
            <h1>To Be Read</h1>
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

export default ToBeRead;