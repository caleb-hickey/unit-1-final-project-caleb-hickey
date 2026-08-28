import BookCard from '../../assets/BookCard.jsx'

function OwnedBooks ({ books, toggleOwned }) {
    const booksOwned = books.filter((book) => book.owned === true)
    return (
        <div>
            <h1>Owned Books</h1>
            {booksOwned.map((book) => (
                <BookCard 
                    coverUrl={book.coverUrl}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                    pageLength={book.pageLength}
                    owned={book.owned}
                    id={book.id}
                    toggleOwned={toggleOwned}
                />
            ))}
        </div>
    );
}

export default OwnedBooks;

//code from the practice-react-app project will be helpful in loading cards onto this page

//code from the software-dev-course-react-state-practice-1 will be helpful for sorting and isolating specific categories, like books in the "read" or "unread" status