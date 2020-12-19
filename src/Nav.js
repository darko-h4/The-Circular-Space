import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpeg';
import './App.css';
import fire from "./fire.js";


function Nav(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeNavMenu = () => setClick(false);

    const handleLogout = () => {
        fire.auth().signOut();
      };

    return (
    
    <nav className="navbar">
        <Link to='/itempage' class="fas fa-chevron-left"></Link>
        <img className="nav-logo" src={logo} alt="logo"/>
        <div className="hamburger">
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> 
        </div>
        </div>
        <ul className={click ? 'nav-menu' : 'nav-menu hidden'}>
            <li className='nav-item'>
                <Link to='/profile' className='nav-links' onClick={closeNavMenu}>
                    Profile Page
                </Link>            
            </li>
            <li className='nav-item'>
                <Link to='/itempage' className='nav-links' onClick={closeNavMenu}>
                    Items
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/additem' className='nav-links' onClick={closeNavMenu}>
                   + Add Item
                </Link>
            </li>
            <li className='nav-item'>
            <Link to='/login'>
            <button onClick={handleLogout}>Logout</button>
            </Link>

            </li>
        </ul>
    </nav>
    );
}
export default Nav;