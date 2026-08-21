import BookList from '../../assets/bookList.js'
import BookCard from '../../assets/BookCard.jsx'

function BooksUnread () {
    const booksReadFalse = BookList.filter((book) => book.read === false && book.owned === true)
    return (
        <div>
            {booksReadFalse.map((book) => (
                <BookCard 
                    coverUrl={book.coverUrl}
                    title={book.title}
                    author={book.author}
                />
            ))}
        </div>
    );
}

export default BooksUnread;