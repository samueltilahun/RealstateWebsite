import React from 'react'
import logo from "../../../components/data/images/logo.png"
import { Link } from 'react-router-dom'
import "./header.css"
import {nav} from "../../data/Data"
import { NavLink} from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
  return (
    <header>
        <div className="container flex">
            <div className="logoDiv">
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className="nav">  
                {
                    nav.map((list, index) => ( 
                        <NavLink key={index} to={list.path}>{list.text}</NavLink>
                    ))
                }
            </div>
            {/* <div className="navBar flex">
                <ul className="navLists">
                    <li className="navItem">
                        <a href="home" className='navLink'>Home</a>
                    </li> 
                </ul>
                <ul className="navLists">
                    <li className="navItem">
                        <a href="home" className='navLink'>About</a>
                    </li>
                </ul>
                <ul className="navLists">
                    <li className="navItem">
                        <a href="home" className='navLink'>Services</a>
                    </li>
                </ul>
                <ul className="navLists">
                    <li className="navItem">
                        <a href="home" className='navLink'>Pricing</a>
                    </li>
                </ul>
                <ul className="navLists">
                    <li className="navItem">
                        <a href="home" className='navLink'>Contact</a>
                    </li>
                </ul>
            </div> */}
        </div>
    </header>
  )
}

export default Header