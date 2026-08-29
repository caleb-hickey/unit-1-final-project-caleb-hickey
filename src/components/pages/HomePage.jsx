import logo from '../../assets/Images/logo.png'

function HomePage() {

    return(
        <div className="homepageBanner">
            <img className="homepageLogo" src={logo}></img>
            <h1>Welcome to myShelf!</h1>
            <h3>Your book collection manager, digitized</h3>
        </div>
    );
}

export default HomePage