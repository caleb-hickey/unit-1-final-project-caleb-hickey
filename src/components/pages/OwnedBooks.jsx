import BookList from '../../assets/bookList.js'
import BookCard from '../../assets/BookCard.jsx'

function OwnedBooks () {
    return (
        <div>
            {BookList.map((book) => (
                <BookCard 
                    coverUrl={book.coverUrl}
                    title={book.title}
                    author={book.author}
                />
            ))}
        </div>
    );
}

export default OwnedBooks;

//code from the practice-react-app project will be helpful in loading cards onto this page

//code from the software-dev-course-react-state-practice-1 will be helpful for sorting and isolating specific categories, like books in the "read" or "unread" status