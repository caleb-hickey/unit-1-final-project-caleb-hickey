import BookList from '../../assets/bookList.js'
import BookCard from '../../assets/BookCard.jsx'

function BooksRead () {
    const booksReadTrue = BookList.filter((book) => book.read === true)
    return (
        <div>
            {booksReadTrue.map((book) => (
                <BookCard 
                    coverUrl={book.coverUrl}
                    title={book.title}
                    author={book.author}
                />
            ))}
        </div>
    );
}

export default BooksRead;