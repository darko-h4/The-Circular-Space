import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';


function Nav(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeNavMenu = () => setClick(false);

    return (
    <nav className="navbar">
        <div className="navbar-container">
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> 
        </div>
        <ul className={click ? 'nac-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/profile' className='nav-links' onClick={closeNavMenu}>
                    Profile Page
                </Link>            
            </li>
            <li className='nav-item'>
                <Link to='/categories' className='nav-links' onClick={closeNavMenu}>
                    Categories
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/addItem' className='nav-links' onClick={closeNavMenu}>
                   + Add Item
                </Link>
            </li>
        </ul>
        </div>
    </nav>
    );
}
export default Nav;