import React from "react";
import {Link} from 'react-router-dom';
import ItemCard from './ItemCard';
import "./App.css";


const ItemBorrowed= () => {  
    return (

    <div>
        <h1>Item Borrowed!</h1>
        
        <div>
        <ItemCard
        />
        </div>
        
        <div>
        <p>
        You successfully borrowed the item! Ready to borrow more items and continue your circular space?
        </p>
        </div>
      

      
      <div>
      <Link to="/itempage"><button>Back to Items</button></Link>
      </div>
    </div>

    
    );
    };
    
    export default ItemBorrowed;
    