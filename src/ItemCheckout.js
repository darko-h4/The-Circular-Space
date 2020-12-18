import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Nav from './Nav.js';
import ItemCard from './ItemCard';
import "./App.css";
import {NoteField} from "./components/FormFields";
import {DropdownNumberSelection, DropdownDurationSelection, DropdownDeliverySelection} from "./components/DropdownSelectors";
import {borrowcollection, collection} from './fire';


const ItemAdded= () => {  
  //const id = localStorage.getItem("id"); //tilføjet
  //const [Item, setItem] = useState({}); //tilføjet
  //collection.doc(id).get().then(document => setItem(document.data())); //tilføjet 

    return (
      <section className='main'>
    <div className='mainContainer'>
      <div className='toppage'>
        <Nav />
        <div className='toppage'>
      </div>
        <h1>Item Checkout</h1>
        </div>
     <div>
      

      <div className='checkout'>

         <p>Borrow for: </p>
  
        <DropdownNumberSelection id="number"/>
        <br/>
        <DropdownDurationSelection id="duration"/>
        <br/>
        <p>Do you want to pick-up or have the item sent?</p>
        <DropdownDeliverySelection id="delivery"/>
        <br/>
        <NoteField id="notefield"/>
      </div>

      <div className='btnContainer'>
      <Link to='itemborrowed' onClick={UpdateBorrowedItem} ><button id="itemborrowed">Complete Checkout!</button></Link>
      </div>

    </div> 
      
      </div>
      </section>

    
    );
    };

    const UpdateBorrowedItem= () => {

      const id = localStorage.getItem("id");
      const number = document.querySelector("#number div").innerHTML;
      const duration = document.querySelector("#duration div").innerHTML;
      const delivery = document.querySelector("#delivery div").innerHTML;
      const notefield =document.querySelector("#notefield").value;
      
    
        console.log("update " + id + " to Firestore");
        borrowcollection.doc(id).update({
            Number: number,
            Duration: duration,
            Delivery: delivery,
            Notefield: notefield,
        
      }).then(function() {
      console.log("Status saved!");
      }).catch(function (error) {
      console.log("Got an error " + error);
      });
      
    } 



    
    export default ItemAdded;
    

  
  