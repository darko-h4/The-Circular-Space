import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpeg';
import './App.css';


function Navlogin({ handleLogout }){
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const closeNavMenu = () => setClick(false);

    return (
    
    <nav className="navbar">
        <Link to='/' class="fas fa-chevron-left"></Link>
        <img className="nav-logo" src={logo} alt="logo"/>
    </nav>
    );
}
export default Navlogin;