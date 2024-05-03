import React from 'react'
import logo from "../../../components/data/images/logo.png"
import "./header.css"

const Header = () => {
  return (
    <header>
        <div className="container flex">
            <div className="logoDiv">
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className="navBar flex">
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="home" className='navLink'>Home</a>
                    </li>
                </ul>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="home" className='navLink'>About</a>
                    </li>
                </ul>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="home" className='navLink'>Services</a>
                    </li>
                </ul>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="home" className='navLink'>Pricing</a>
                    </li>
                </ul>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="home" className='navLink'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header