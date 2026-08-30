function About() {

    return(
        <div className="aboutPage">
            <main className="aboutPageOverview">
                <h1 className="aboutPageTitle">About Using myShelf</h1>
                <p className="aboutPageIntroParagraph"><b>myShelf</b> is a simple place to keep a digital version of your bookshelf. Add the books you own, the ones you have already read, and the ones you want, then open that library from anywhere instead of relying on memory or a pile of notes. Each title lives on a card with the details that matter—cover, author, genre, length—and you can mark whether you own it, have read it, or have it on your wishlist so the shelves stay accurate as your collection changes. </p>
                <br></br>
            </main>
            <section className="howToUseBlock">
                <h1>How to use myShelf</h1>
                <p>When you click on the Library link above, you'll see your library, represented digitally. To find books, click on the <b>"Browse Books"</b> tab. You'll see the full collection of books we currently support!
                    <br></br>
                    <br></br>
                    Click on <b>Show Details</b> to see more information on the title you've selected!
                    <br></br>
                    <br></br>
                    You'll also notice at the bottom that you can indicate that you own a book, that you've read a book, that you own a book you haven't read yet, or that you want to put a book on your wishlist.
                    <br></br>
                    <br></br>
                    If you have a book on your wishlist, click on the <b>Wishlist</b> button to view it. If you've gotten the book since adding it, click on the <b>Show Details</b> button for that book card, and then click <b>I own this</b> to move it from your wish list to your list of books you own. The same goes for a book that you have in the <b>to be read</b> status that you just finished. 
                    <br></br>
                    <br></br>
                    And that's it! You're all set to manage your collection!
                </p>
            </section>
        </div>
    );
}

export default About