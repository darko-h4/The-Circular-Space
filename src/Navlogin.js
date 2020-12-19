import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpeg';
import './App.css';


function Navlogin(){
  
    return (
    
    <nav className="navbar">
        <Link to='/' class="fas fa-chevron-left"></Link>
        <img className="nav-logo" src={logo} alt="logo"/>
    </nav>
    );
}
export default Navlogin;