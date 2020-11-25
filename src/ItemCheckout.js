import React from "react";
import {Link} from 'react-router-dom';
import ItemCard from './ItemCard';
import "./App.css";
import { NoteField } from "./components/FormFields";
import {DropdownNumberSelection, DropdownDurationSelection, DropdownDeliverySelection} from "./components/DropdownSelectors";


const ItemAdded= () => {  
    return (

    <div>
        <h1>Item Checkout</h1>
        
        <div>
        <ItemCard
        />
      </div>

      <div>
      <label>Borrow from </label>
    <DropdownNumberSelection
    />
    <DropdownDurationSelection
    />
      <label>Do you want to pick-up or have the item sent?</label>
    <DropdownDeliverySelection
    />
    <NoteField
    />
    </div>
      
      <div className="spanDesign">
      <Link to="/itemborrowed"><button>Complete Checkout</button></Link>
      <p>
         <span onClick={() => <Link to="/itempage"></Link>}>
                  Cancel
        </span>
        </p>
      </div>
      </div>

    
    );
    };
    
    export default ItemAdded;
    