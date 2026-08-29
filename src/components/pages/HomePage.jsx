import logo from '../../assets/Images/logo.png'

function HomePage() {

    return(
        <div className="homepageBanner">
            <img className="homepageLogo" src={logo}></img>
            <h1>Homepage</h1>
            <h3>Your digital book collection manager</h3>
        </div>
    );
}

export default HomePage