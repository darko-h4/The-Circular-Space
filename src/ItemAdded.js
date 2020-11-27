import React from "react";
import {Link} from 'react-router-dom';
import ItemCard from './ItemCard';
import "./App.css";

const ItemAdded= () => {  
    return (

    <div>
        <h1>Item added!</h1>
        <h3>Other people can now see and borrow your item :)</h3>
        
        <div>
        <ItemCard
        />
      </div>
      
      <div className="spanDesign">
      <Link to="/adddetails"><button>Back to Items</button></Link>
      <p>
         <span onClick={() => <Link to="/profile"></Link>}>
                  Profile page
        </span>
        </p>
      </div>
      </div>

    
    );
    };
    
    export default ItemAdded;
    