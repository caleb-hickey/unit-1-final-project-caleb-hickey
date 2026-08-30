import BookCard from '../../assets/BookCard.jsx'

function BrowseBooks ({ books, toggleOwned, toggleRead, toggleWishList }) {
    return (
        <div>
            <h1>Browse Books</h1>
            <section className="bookCardContainer">
            {books.map((book) => (
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

export default BrowseBooks;



//code from the practice-react-app project will be helpful in loading cards onto this page

//code from the software-dev-course-react-state-practice-1 will be helpful for sorting and isolating specific categories, like genres