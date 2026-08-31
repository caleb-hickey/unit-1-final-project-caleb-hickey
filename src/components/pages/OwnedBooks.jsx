import BookCard from '../../assets/BookCard.jsx'

function OwnedBooks ({ books, toggleOwned, toggleRead, toggleWishList }) {
    const booksOwned = books.filter((book) => book.owned === true)
    return (
        <div>
            <h1 className="libraryCardHeader">Books I Own</h1>
            <section className="bookCardContainer">
            {booksOwned.map((book) => (
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

export default OwnedBooks;

//code from the practice-react-app project will be helpful in loading cards onto this page

//code from the software-dev-course-react-state-practice-1 will be helpful for sorting and isolating specific categories, like books in the "read" or "unread" status