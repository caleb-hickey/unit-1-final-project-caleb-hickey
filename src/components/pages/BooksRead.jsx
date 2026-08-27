import BookCard from '../../assets/BookCard.jsx'


function BooksRead ({ books }) {
    const booksReadTrue = books.filter((book) => book.read === true)
    return (
        <div>
            <h1>Books Read</h1>
            {booksReadTrue.map((book) => (
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

export default BooksRead;