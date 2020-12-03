import React from "react";
import {Link} from 'react-router-dom';
import ItemCard from './ItemCard';
import "./App.css";
import Nav from './Nav';

const ItemAdded= () => {  
    return (
      
    <section className='main'>
    <div className='mainContainer'>
      <Nav />
        <h1>Item added!</h1>
        <h3>Other people can now see and borrow your item!</h3>
        
        <div>
        <ItemCard
        />
      </div>
      
      <div className="btnContainer">
      <Link to="/itempage"><button>Back to Items</button></Link>
      <Link to="/profile"><button className='white'>Profile page</button></Link>
      </div>
    </div>
    </section>

    
    );
    };
    
    export default ItemAdded;
    