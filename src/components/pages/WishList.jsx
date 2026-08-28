import BookCard from '../../assets/BookCard.jsx'


function WishList ({ books }) {
    const booksOnWishList = books.filter((book) => book.wishlist === true)
    return (
        <div>
            {booksOnWishList.map((book) => (
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

export default WishList

//code from the practice-react-app project will be helpful in loading cards onto this page