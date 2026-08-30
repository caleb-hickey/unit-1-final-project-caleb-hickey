import { useState } from 'react'
import logo from '../../assets/Images/logo.png'

function Header() {
    return(
        <div className="header">
            <h1 className="pageTitle">myShelf</h1>
            <img className="headerLogo" alt="Logo for myShelf" src={logo}></img>
        </div>
    )
}

export default Header;