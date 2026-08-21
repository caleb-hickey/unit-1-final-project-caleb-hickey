function BookCard ({ title, author, coverUrl }) {
    return (
        <div className= "BookCard">
            <img src={coverUrl} className= "BookCoverImage"></img>
            <p className= "BookCardTitle"><b>Title:</b> {title}</p>
            <p className= "BookCardAuthor"><b>Author:</b> {author}</p>
        </div>
    );
}

export default BookCard;