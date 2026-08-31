import { useState } from 'react'

function BookCard ({ title, author, coverUrl, genre, pageLength, owned, read, wishlist, id, toggleOwned, toggleRead, toggleWishList }) {
    const [openDetails, setOpenDetails] = useState(false);
    
    return (
        <div className= "BookCard">
            <img src={coverUrl} className= "BookCoverImage" alt="Book cover"></img>
            <p className= "BookCardTitle"><b>Title:</b> {title}</p>
            <p className= "BookCardAuthor"><b>Author:</b> {author}</p>
                {openDetails && (
                    <div className="bookDetails">
                        <p className= "BookDetailsGenre"><b>Genre:</b> {genre}</p>
                        <p className= "BookDetailsPageLength"><b>Page Count:</b> {pageLength} pages</p>
                            <section className="bookToggleButtons">
                                <button 
                                    id="ownButton" 
                                    onClick={() => toggleOwned(id, "owned")}
                                    >{owned ? "I don't own this" : "I own this"}</button>
                                <button 
                                    id="readButton"
                                    onClick={() => toggleRead(id, "read")}
                                    >{read ? "I haven't read this" : "I have read this"}</button>
                                <button 
                                    id="wishlistButton"
                                    onClick={() => toggleWishList(id, "wishlist")}
                                    >{wishlist ? "Take off my Wish List" : "On my Wish List"}</button>
                            </section>
                    </div>
                )}
            <button className="detailsButton" onClick={() => setOpenDetails(!openDetails)}>{openDetails ? 'Hide Details' : 'Show Details'}</button>
        </div>
    );
}

export default BookCard;