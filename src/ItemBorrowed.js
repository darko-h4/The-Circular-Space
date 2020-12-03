import React from "react";
import {Link} from 'react-router-dom';
import ItemCard from './ItemCard';
import "./App.css";
import Nav from './Nav.js';


const ItemBorrowed= () => {  
    return (
    <section className='main'>
    <div className='mainContainer'>

      <Nav/>
      <div className='toppage'>

        <h1>Item Borrowed!</h1>
        <h3>
        You successfully borrowed the item! Ready to borrow more items and continue your circular space?
        </h3>
      </div>
      
      <div>
        <ItemCard/>
      </div>
      
        <div className="btnContainer">
      <Link to="/itempage"><button>Back to Items</button></Link>
      <Link to="/profile"><button className='white'>Profile page</button></Link>
      </div>
      
    </div>
    </section>
    
    );
    };
    
    export default ItemBorrowed;
    