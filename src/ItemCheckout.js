import React from "react";
import {Link} from 'react-router-dom';
import Nav from './Nav.js';
import ItemCard from './ItemCard';
import "./App.css";
import { NoteField } from "./components/FormFields";
import {DropdownNumberSelection, DropdownDurationSelection, DropdownDeliverySelection} from "./components/DropdownSelectors";


const ItemAdded= () => {  
    return (
      <section className='main'>
    <div className='mainContainer'>
      <div className='toppage'>
        <Nav />
        <h1>Item Checkout</h1>
        </div>

     <div>
        <div>
        <ItemCard
        />
      </div>

      <div className='checkout'>
         <p>Borrow for: </p>
  
        <DropdownNumberSelection/>
        <br/>
        <DropdownDurationSelection/>
        <br/>
        <p>Do you want to pick-up or have the item sent?</p>
        <DropdownDeliverySelection/>
        <br/>
        <NoteField/>
      </div>

      <div className='btnContainer'>
      <Link to='itemborrowed'><button>Complete Checkout!</button></Link>
      </div>

    </div> 
      
      </div>
      </section>

    
    );
    };
    
    export default ItemAdded;
    