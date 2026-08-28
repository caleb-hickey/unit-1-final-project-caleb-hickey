import { useState } from 'react'

function BookCard ({ title, author, coverUrl, genre, pageLength, owned, id, toggleOwned }) {
    const [openDetails, setOpenDetails] = useState(false);
    
    return (
        <div className= "BookCard">
            <img src={coverUrl} className= "BookCoverImage"></img>
            <p className= "BookCardTitle"><b>Title:</b> {title}</p>
            <p className= "BookCardAuthor"><b>Author:</b> {author}</p>
            <br></br>
            <button onClick={() => setOpenDetails(!openDetails)}>{openDetails ? 'Hide Details' : 'Show Details'}</button>
                {openDetails && (
                    <div className="bookDetails">
                        <p className= "BookDetailsGenre"><b>Genre:</b> {genre}</p>
                        <p className= "BookDetailsPageLength"><b>Page Count:</b> {pageLength} pages</p>
                            <button 
                                className="ownButton" 
                                onClick={() => toggleOwned(id, "owned")}
                                >{owned ? "I don't own this" : "I own this"}</button>
                            <button className="readButton">I've read this</button>
                            <button className="wishlistButton">I want this</button>
                    </div>
                )}
        </div>
    );
}

export default BookCard;