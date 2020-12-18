import React from "react";
import {Link} from 'react-router-dom';
import ItemCard from './ItemCard';
import "./App.css";
import Nav from './Nav';
import {collection} from './fire';
import {fire} from './fire';

async function FecthItems() {

  const itemRef = fire.collection('Items').doc('id');

  const doc = await itemRef.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }

}

const ItemAdded= () => {  
    return (

    <section className='main'>
    <div className='mainContainer'>
      <Nav />
        <h1>Item added!</h1>
        <h3>Other people can now see and borrow your item!</h3>
        <ul>   
        
          
      
      </ul>
      
      <div className="btnContainer">
      <Link to="/itempage"><button>Back to Items</button></Link>
      <Link to="/profile"><button className='white'>Profile page</button></Link>
      </div>
    </div>
    </section>


    );
    };
    
    export default ItemAdded;
    
