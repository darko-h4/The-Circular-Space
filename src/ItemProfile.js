import React,{useState} from "react";
import "./App.css";
import Nav from './Nav';
import {Link} from 'react-router-dom';
import {borrowcollection, collection} from './fire';

const ItemProfile = () => {

  const id = localStorage.getItem("id");
  const [Item, setItem] = useState({});

  collection.doc(id).get().then(document => setItem(document.data()));


  return (
    <section className='main'>
    <div className="mainContainer">
      <Nav/>
      <div className='toppage'>
        <h1 id="itemname">{Item.Name}</h1>
      </div>
        
        <div className="itemprofilecard">
        <h4 id="points">Points: {Item.Points}</h4>
        <p>Available for: {Item.Number} {Item.Duration} </p>
        <p>Condition: {Item.Condition} </p>
        <p>Delivery: {Item.Delivery} </p>
        </div>

        <div className="itemprofilecard">
         <p> {Item.Description} </p>
        </div>


        <div className='btnContainer'>
          <Link to='/itemcheckout' onClick={UploadBorrowedItem}><button id="borrowbutton">Borrow This Item!</button></Link>
        </div>
        
    </div>
    </section>
  );
};      

const UploadBorrowedItem = () => {

  const item = document.querySelector("#borrowbutton").value;


    console.log("save " + item + " to Firestore");
    localStorage.setItem("id", item.id);
    borrowcollection.add({
        Name: item,

    })
    .then (result => localStorage.setItem("id", result.id));
        console.log("Status saved!");
  
} 




export default ItemProfile;





/*I will be on vacation for 3 weeks, and since the holiday season its on its way, you might want to start your 
           exercising skills, and get fit for 2021! I will therefore be offering my racing bike for 3 weeks, which can hopefully help someone out!
           You can pick it up close to Norrebro st. at 2400 NV, Copenhagen. 30 points and its yours!
           */
