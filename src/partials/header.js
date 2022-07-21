import React from "react"
function Header(){
    return (
    <header>   
        <nav className='navigation-bar'>
            <ul className="nav-bar-first">
               <ul className="navbar-first-first">
                    <li><img className='nav-logo' src='./images/logo.jpg' width='40px' height="40px" alt='logo'/></li>
                    <li><h1>SHIRODIP DAHAL</h1></li>
               </ul>
               <button className="button-to-toggle-menu" id="button-to-toggle-menu">
                    <li className="menu-bar"></li>
                    <li className="menu-bar"></li>
                    <li className="menu-bar"></li>
               </button >
            </ul>
            <ul id="nav-bar-second" className='nav-bar-second'>
                <li><a href="#home">Home</a></li>
                <li><a href="#main">About</a></li>
                <li><a href="#main">Projects</a></li>
                <li><a href="#main">Contact</a></li>
            </ul>
        </nav>
    </header>)
}

export default Header